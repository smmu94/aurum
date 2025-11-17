export const ROUTES = {
  HOME: "/",
  MENU: "/menu",
  GALLERY: "/gallery",
  ABOUT: "/about",
  LOCATIONS: "/locations",
  RESERVATIONS: "/reservations",
} as const;

export const MENU_ITEMS: {
  name: string;
  path: typeof ROUTES[keyof typeof ROUTES];
}[] = [
  { name: "Menu", path: ROUTES.MENU },
  { name: "About", path: ROUTES.ABOUT },
  { name: "Locations", path: ROUTES.LOCATIONS },
  { name: "Gallery", path: ROUTES.GALLERY },
  { name: "Reservations", path: ROUTES.RESERVATIONS },
];
