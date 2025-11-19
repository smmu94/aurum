import type { Category, Dish } from "../types/menu";

export const CATEGORIES: Array<Category> = [
  { id: "appetizers", label: "Appetizers" },
  { id: "mainCourses", label: "Main Courses" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
] as const;

export const DISHES_BY_CATEGORY: Record<typeof CATEGORIES[number]["id"], Dish[]> = {
  [CATEGORIES[0].id]: [
    { id: "a1", name: "Bruschetta", description: "Toasted bread with tomato and basil", price: 5.5, imageUrl: "/images/menu/bruschetta.jpg" },
    { id: "a2", name: "Ceviche", description: "Fresh fish ceviche with lime and cilantro", price: 7.0, imageUrl: "/images/menu/ceviche.webp" },
    { id: "a3", name: "Spring Rolls", description: "Vegetable spring rolls with sweet chili sauce", price: 6.0, imageUrl: "/images/menu/spring_rolls.jpg" },
    { id: "a4", name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and herbs", price: 6.5, imageUrl: "/images/menu/mushrooms.webp" },
    { id: "a5", name: "Garlic Shrimp", description: "Shrimp sautéed with garlic and butter", price: 8.0, imageUrl: "/images/menu/garlic_shrimp.jpg" },
    { id: "a6", name: "Caprese Salad", description: "Tomato, mozzarella and basil salad", price: 5.0, imageUrl: "/images/menu/caprese_salad.jpg" },
  ],
  [CATEGORIES[1].id]: [
    { id: "m1", name: "Lasagna", description: "Meat lasagna with cheese", price: 12.0, imageUrl: "/images/menu/lasagna.jpg" },
    { id: "m2", name: "Grilled Salmon", description: "Salmon fillet with lemon butter", price: 15.0, imageUrl: "/images/menu/salmon.jpg" },
    { id: "m3", name: "Steak Frites", description: "Grilled steak with french fries", price: 18.0, imageUrl: "/images/menu/steak.jpg" },
    { id: "m4", name: "Chicken Alfredo", description: "Fettuccine with creamy chicken sauce", price: 13.0, imageUrl: "/images/menu/chicken-alfredo.jpg" },
    { id: "m5", name: "Vegetable Stir-Fry", description: "Mixed vegetables sautéed with soy sauce", price: 11.0, imageUrl: "/images/menu/vegetable_stir.webp" },
    { id: "m6", name: "Beef Tacos", description: "Tacos with seasoned beef and toppings", price: 12.0, imageUrl: "/images/menu/tacos.webp" },
  ],
  [CATEGORIES[2].id]: [
    { id: "d1", name: "Tiramisu", description: "Classic Italian coffee dessert", price: 6.0, imageUrl: "/images/menu/tiramisu.jpg" },
    { id: "d2", name: "Cheesecake", description: "Creamy cheesecake with berry sauce", price: 5.5, imageUrl: "/images/menu/cheesecake.jpg" },
    { id: "d3", name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: 6.5, imageUrl: "/images/menu/chocolate.webp" },
    { id: "d4", name: "Panna Cotta", description: "Vanilla panna cotta with caramel", price: 5.0, imageUrl: "/images/menu/panna-cotta.jpg" },
    { id: "d5", name: "Apple Pie", description: "Classic apple pie with cinnamon", price: 5.5, imageUrl: "/images/menu/apple_pie.webp" },
    { id: "d6", name: "Fruit Tart", description: "Seasonal fruit tart with custard", price: 6.0, imageUrl: "/images/menu/fruit_tart.jpg" },
  ],
  [CATEGORIES[3].id]: [
    { id: "dr1", name: "Lemonade", description: "Fresh lemonade with mint", price: 3.0, imageUrl: "/images/menu/lemonade.jpg" },
    { id: "dr2", name: "Iced Tea", description: "Cold brewed iced tea", price: 3.0, imageUrl: "/images/menu/iced-tea.webp" },
    { id: "dr3", name: "Coffee", description: "Hot brewed coffee", price: 2.5, imageUrl: "/images/menu/coffee.jpg" },
    { id: "dr4", name: "Orange Juice", description: "Freshly squeezed orange juice", price: 3.5, imageUrl: "/images/menu/orange_juice.jpg" },
    { id: "dr5", name: "Smoothie", description: "Mixed fruit smoothie", price: 4.0, imageUrl: "/images/menu/smoothie.webp" },
    { id: "dr6", name: "Sparkling Water", description: "Carbonated mineral water", price: 2.5, imageUrl: "/images/menu/sparkling.webp" },
  ],
};