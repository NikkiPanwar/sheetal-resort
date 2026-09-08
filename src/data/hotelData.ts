export interface FeatureItem {
  id: string;
  iconType: "mountain" | "bed" | "food" | "dining" | "catering" | "home";
  title: string;
}

export interface RoomItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
  amenities: { name: string; icon: string }[];
}

export interface FoodItem {
  id: string;
  name: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export const scenarioFeatures: FeatureItem[] = [
  {
    id: "scenic-mountain",
    iconType: "mountain",
    title: "Scenic Mountain View",
  },
  {
    id: "comfortable-rooms",
    iconType: "bed",
    title: "Comfortable Rooms",
  },
  {
    id: "delicious-food",
    iconType: "food",
    title: "Delicious Food & Restaurant",
  },
  {
    id: "dining-area",
    iconType: "dining",
    title: "Dining Area for 40-50 People",
  },
  {
    id: "wedding-catering",
    iconType: "catering",
    title: "Wedding & Event Catering",
  },
  {
    id: "long-stay",
    iconType: "home",
    title: "Long Stay Rooms Available",
  },
];

export const hotelRooms: RoomItem[] = [
  {
    id: "single-room",
    title: "Single Room",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
    amenities: [
      { name: "Bed", icon: "bed" },
      { name: "Fan", icon: "fan" },
      { name: "TV", icon: "tv" },
      { name: "Geyser", icon: "geyser" },
      { name: "Water Facility", icon: "water" },
    ],
  },
  {
    id: "double-room",
    title: "Double Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    amenities: [
      { name: "Bed", icon: "bed" },
      { name: "Fan", icon: "fan" },
      { name: "TV", icon: "tv" },
      { name: "Geyser", icon: "geyser" },
      { name: "Water Facility", icon: "water" },
    ],
  },
  {
    id: "long-stay-room",
    title: "Long Stay / Monthly Rooms",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80",
    description: "We also provide rooms for long term stay with all basic facilities.",
    amenities: [
      { name: "Bed", icon: "bed" },
      { name: "Work Desk", icon: "desk" },
      { name: "WiFi", icon: "wifi" },
      { name: "Geyser", icon: "geyser" },
      { name: "Pantry Access", icon: "kitchen" },
    ],
  },
];

export const restaurantHighlights = [
  "Tandoori Roti",
  "North Indian Cuisine",
  "Fresh & Hygienic Food",
  "Group & Party Orders",
];

export const foodItems: FoodItem[] = [
  {
    id: "tandoori-roti",
    name: "Tandoori Roti",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mix-veg",
    name: "Mix Veg",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "hotel-view",
    title: "Hotel View",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rooms",
    title: "Rooms",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food",
    title: "Food",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "outside-view",
    title: "Outside View",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dining-area",
    title: "Dining Area",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
  },
];

export const contactDetails = {
  address: "Kempty Fall Road, Mussoorie, Uttarakhand, India",
  phone: "+91 98765 43210",
  email: "info@kemptyviewhotel.com",
  whatsappNumber: "919876543210",
  mapCoordinates: "Kempty Falls, Mussoorie, Uttarakhand 248179",
};
