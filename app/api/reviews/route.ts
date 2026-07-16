import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define TypeScript interfaces for our review data
interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface CacheData {
  rating: number;
  user_ratings_total: number;
  last_updated: number;
  reviews: Review[];
}

export async function GET() {
  const cachePath = path.join(process.cwd(), "data", "google_reviews_cache.json");

  // Read environment variables
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Function to load the cached data as a fallback
  const getCachedData = (): CacheData | null => {
    try {
      if (fs.existsSync(cachePath)) {
        const fileContent = fs.readFileSync(cachePath, "utf-8");
        return JSON.parse(fileContent);
      }
    } catch (err) {
      console.error("Error reading google reviews cache file:", err);
    }
    return null;
  };

  // If environment variables are not configured, return the cached data immediately
  if (!apiKey || !placeId) {
    const cachedData = getCachedData();
    if (cachedData) {
      return NextResponse.json({ ...cachedData, source: "cache_unconfigured" });
    }
    return NextResponse.json(
      { error: "Google reviews cache not found and API credentials are not set." },
      { status: 500 }
    );
  }

  try {
    // Call the Google Maps Place Details API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache on Next.js fetch layer for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Google API returned status code ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google API status returned: ${data.status}. Msg: ${data.error_message || "No message"}`);
    }

    const result = data.result;

    // Build the updated cache data
    const apiReviews: Review[] = (result.reviews || []).map((r: any) => ({
      author_name: r.author_name,
      profile_photo_url: r.profile_photo_url || "",
      rating: r.rating || 5,
      text: r.text || "",
      relative_time_description: r.relative_time_description || "some time ago",
      time: r.time || Math.floor(Date.now() / 1000),
    }));

    // If API succeeds but returns empty reviews, we can preserve our high-quality cached reviews
    const fallbackData = getCachedData();
    const finalReviews = apiReviews.length > 0 ? apiReviews : (fallbackData?.reviews || []);

    const newCache: CacheData = {
      rating: result.rating || fallbackData?.rating || 5.0,
      user_ratings_total: result.user_ratings_total || fallbackData?.user_ratings_total || 97,
      last_updated: Date.now(),
      reviews: finalReviews,
    };

    // Save updated reviews to the cache file
    try {
      // Ensure the directory exists
      const dirPath = path.dirname(cachePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      fs.writeFileSync(cachePath, JSON.stringify(newCache, null, 2), "utf-8");
    } catch (writeErr) {
      console.error("Failed to write to Google reviews cache file:", writeErr);
    }

    return NextResponse.json({ ...newCache, source: "live_api" });
  } catch (error: any) {
    console.error("Google Business API fetch failed, falling back to cache. Error:", error.message || error);

    const cachedData = getCachedData();
    if (cachedData) {
      return NextResponse.json({ ...cachedData, source: "cache_fallback", error: error.message || error });
    }

    return NextResponse.json(
      { error: "Failed to fetch live reviews and no cached reviews are available." },
      { status: 500 }
    );
  }
}
