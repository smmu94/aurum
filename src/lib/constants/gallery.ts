import type { GalleryCategory, GalleryItem } from "../../types/gallery";

export const GALLERY_CATEGORIES: Array<GalleryCategory> = [
  { id: "all", label: "All" },
  { id: "dishes", label: "Dishes" },
  { id: "ambiance", label: "Ambiance" },
  { id: "drinks", label: "Drinks" },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", name: "Paella", description: "Traditional Spanish rice dish", imageUrl: "/images/gallery/paella.jpg", category: "dishes" },
  { id: "g2", name: "Sushi", description: "Fresh sushi platter", imageUrl: "/images/gallery/sushi.jpg", category: "dishes" },
  { id: "g3", name: "Pasta", description: "Homemade pasta", imageUrl: "/images/gallery/pasta.jpg", category: "dishes" },
  { id: "g4", name: "Main Dining", description: "Our elegant dining room", imageUrl: "/images/gallery/dining.png", category: "ambiance" },
  { id: "g5", name: "Bar Area", description: "Cozy bar section", imageUrl: "/images/gallery/bar.jpg", category: "ambiance" },
  { id: "g6", name: "Terrace", description: "Outdoor seating", imageUrl: "/images/gallery/terrace.jpg", category: "ambiance" },
  { id: "g7", name: "Cocktails", description: "Signature cocktails", imageUrl: "/images/gallery/cocktails.jpg", category: "drinks" },
  { id: "g8", name: "Wine Selection", description: "Premium wines", imageUrl: "/images/gallery/wine.jpg", category: "drinks" },
  { id: "g9", name: "Craft Beer", description: "Local craft beers", imageUrl: "/images/gallery/beer.jpeg", category: "drinks" },
];