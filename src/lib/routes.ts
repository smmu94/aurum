export const ROUTES = {
  HOME: "/",
  MENU: "/menu",
  GALLERY: "/gallery",
  ABOUT: "/about",
  LOCATIONS: "/locations",
  CONTACT: "/contact",
  RESERVATIONS: "/reservations",
} as const;

export const MENU_ITEMS = [
  { name: "Menu", path: ROUTES.MENU },
  { name: "About", path: ROUTES.ABOUT },
  { name: "Locations", path: ROUTES.LOCATIONS },
  { name: "Gallery", path: ROUTES.GALLERY },
  { name: "Reservations", path: ROUTES.RESERVATIONS },
  { name: "Contact", path: ROUTES.CONTACT },
];
