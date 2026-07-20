import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sixth Sense Technologies",
    short_name: "Sixth Sense",
    description: "Best CCTV Dealer in Thiruvananthapuram | CCTV Installation & Security Systems Kerala",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
