export type GalleryCategory = {
  id: string;
  label: string;
};

export type GalleryItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: "dishes" | "ambiance" | "drinks";
};