/**
 * Dish photos extracted from the official MAHA KOPI MENU 2026 PDF, keyed by
 * exact item name (must match `name` in menu.ts). Items without a photo simply
 * fall back to a placeholder in the UI.
 *
 * To replace a photo, drop a new file in /public/menu and update its path here.
 */
export const menuImages: Record<string, string> = {
  "English Breakfast": "/menu/english-breakfast.webp",
  "Scrambled Egg": "/menu/scrambled-egg.webp",
  "Baked Egg": "/menu/baked-egg.webp",
  "Egg Benedict": "/menu/egg-benedict.webp",
  "Caesar Salad": "/menu/caesar-salad.webp",
  "Rainbow Salad": "/menu/rainbow-salad.webp",
  "Grilled Chicken, Avocado & Pineapple Salad":
    "/menu/grilled-chicken-avocado-pineapple-salad.webp",
  "Vegetable Tortilla": "/menu/vegetable-tortilla.webp",
  "Spring Rolls": "/menu/spring-rolls.webp",
  "Polly Pop Corn": "/menu/polly-pop-corn.webp",
  "French Fries": "/menu/french-fries.webp",
  "Nachos": "/menu/nachos.webp",
  "Chicken Drumstick": "/menu/chicken-drumstick.webp",
  "Sandwich": "/menu/sandwich.webp",
  "Beef Burger": "/menu/beef-burger.webp",
  "Beef Hotdog": "/menu/beef-hotdog.webp",
  "BBQ Pork Ribs": "/menu/bbq-pork-ribs.webp",
  "Ham & Cheese Croissant": "/menu/ham-cheese-croissant.webp",
  "Crispy Calamari Rings": "/menu/crispy-calamari-rings.webp",
  "Fish Dory": "/menu/fish-dory.webp",
  "Fish Fingers": "/menu/fish-fingers.webp",
  "Healthy Food": "/menu/healthy-food.webp",
  "Spaghetti Bolognese": "/menu/spaghetti-bolognese.webp",
  "Spaghetti Carbonara": "/menu/spaghetti-carbonara.webp",
  "Spaghetti Aglio Olio": "/menu/spaghetti-aglio-olio.webp",
  "BBQ Chicken Wings": "/menu/bbq-chicken-wings.webp",
  "Chicken Capcay": "/menu/chicken-capcay.webp",
  "Chicken Satay": "/menu/chicken-satay.webp",
  "Chicken Kebab": "/menu/chicken-kebab.webp",
  "Crispy Chicken Leg with Green Sambal":
    "/menu/crispy-chicken-leg-with-green-sambal.webp",
  "Indonesian Fried Rice": "/menu/indonesian-fried-rice.webp",
  "Seafood Fried Rice": "/menu/seafood-fried-rice.webp",
  "Pork Belly Fried Rice": "/menu/pork-belly-fried-rice.webp",
  "Indonesian Fried Noodles": "/menu/indonesian-fried-noodles.webp",
  "Kwetiau": "/menu/kwetiau.webp",
  "Chicken Katsu Bowl": "/menu/chicken-katsu-bowl.webp",
  "Indonesian Chicken Soup": "/menu/indonesian-chicken-soup.webp",
  "Indonesian Red Snapper Curry": "/menu/indonesian-red-snapper-curry.webp",
  "Indonesian Lamb Tongseng": "/menu/indonesian-lamb-tongseng.webp",
  "Chicken Lalapan": "/menu/chicken-lalapan.webp",
  "Indonesia Fried Chicken with Water Spinach":
    "/menu/indonesia-fried-chicken-with-water-spinach.webp",
  "Galangal Fried Chicken": "/menu/galangal-fried-chicken.webp",
  "Honey Roasted Chicken": "/menu/honey-roasted-chicken.webp",
  "Honey Roasted Duck": "/menu/honey-roasted-duck.webp",
  "Whole Honey Roasted Chicken": "/menu/whole-honey-roasted-chicken.webp",
  "Pancake": "/menu/pancake.webp",
  "Fresh Fruit": "/menu/fresh-fruit.webp",
  "Signature Maha Ice Coffee": "/menu/signature-maha-ice-coffee.webp",
  "Maha Choco Chino": "/menu/maha-choco-chino.webp",
  "Dirty Vanilla Latte": "/menu/dirty-vanilla-latte.webp",
  "Sparkling Americano": "/menu/sparkling-americano.webp",
  "Get Fresh": "/menu/get-fresh.webp",
  "Pineapple Palm": "/menu/pineapple-palm.webp",
  "Frozen Lemon Mint": "/menu/frozen-lemon-mint.webp",
};

/** The full-table spread shot (multiple dishes) for hero / about / gallery. */
export const heroSpread = "/menu/hero-spread.webp";

export function menuImage(name: string): string | undefined {
  return menuImages[name];
}
