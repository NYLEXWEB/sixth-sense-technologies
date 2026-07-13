export interface ReviewItem {
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  initials: string;
  color: string;
}

export const reviewsList: ReviewItem[] = [
  {
    name: "Suresh Kumar",
    role: "Operations Director",
    company: "Apex Builders, Thiruvananthapuram",
    location: "Pulimoodu",
    rating: 5,
    comment: "We contracted Sixth Sense Technologies for a complete CCTV surveillance and door entry access control setup at our corporate headquarters. Their cabling path is remarkably clean, and the Hikvision IP cameras operate flawlessly. Professional technical engineers.",
    initials: "SK",
    color: "bg-blue-600/10 text-blue-600",
  },
  {
    name: "Dr. Anjali Menon",
    role: "Homeowner",
    company: "Residential Villa",
    location: "Vazhuthacaud",
    rating: 5,
    comment: "Highly pleased with their smart villa surveillance package. They installed WiFi security cameras and a video door phone terminal at our house. We can monitor everything from our phones easily. The technical team was patient in explaining the application settings.",
    initials: "AM",
    color: "bg-success-green/10 text-success-green",
  },
  {
    name: "Deepak R.",
    role: "IT Administrator",
    company: "Technopark Enterprise",
    location: "Kazhakkoottam",
    rating: 5,
    comment: "We suffered a critical local server crash and router outage during corporate hours. Sixth Sense Technologies dispatched their network support engineers immediately. They resolved the crash, structured our subnet partitions, and configured a secure firewall.",
    initials: "DR",
    color: "bg-purple-600/10 text-purple-600",
  },
];
