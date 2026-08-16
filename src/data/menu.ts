import type { Lang } from "@/i18n/dictionary";

export type MenuTag = "popular" | "signature" | "spicy" | "veg";

export type Variant = {
  label: { en: string; id: string };
  price: number;
};

export type MenuItem = {
  name: string;
  desc?: { en: string; id: string };
  price?: number;
  variants?: Variant[];
  addon?: { en: string; id: string };
  tags?: MenuTag[];
};

export type MenuCategory = {
  id: string;
  label: { en: string; id: string };
  kicker?: { en: string; id: string };
  items: MenuItem[];
};

/** Format a number as Indonesian Rupiah, e.g. 65000 -> "Rp 65.000" */
export function formatPrice(value: number): string {
  return "Rp " + value.toLocaleString("id-ID");
}

/** Lowest price of an item (for "from" pricing on variants). */
export function itemFromPrice(item: MenuItem): number | undefined {
  if (typeof item.price === "number") return item.price;
  if (item.variants?.length)
    return Math.min(...item.variants.map((v) => v.price));
  return undefined;
}

export function priceLabel(item: MenuItem, lang: Lang): string {
  if (typeof item.price === "number") return formatPrice(item.price);
  if (item.variants?.length) {
    const from = itemFromPrice(item)!;
    return (lang === "id" ? "mulai " : "from ") + formatPrice(from);
  }
  return "";
}

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    label: { en: "Breakfast", id: "Sarapan" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "English Breakfast",
        price: 75000,
        tags: ["popular"],
        desc: {
          en: "A hearty plate of eggs, sausage, baked beans, grilled tomato, and toast — served warm and satisfying.",
          id: "Sepiring lengkap telur, sosis, baked beans, tomat panggang, dan roti — hangat dan mengenyangkan.",
        },
      },
      {
        name: "Baked Egg",
        price: 65000,
        desc: {
          en: "Baked egg dish with bread, mushrooms, tomato, sausages, Parmesan, and golden fries.",
          id: "Telur panggang dengan roti, jamur, tomat, sosis, Parmesan, dan kentang goreng emas.",
        },
      },
      {
        name: "Egg Benedict",
        price: 60000,
        desc: {
          en: "Poached egg on English muffin, served with mushrooms, sausages, and tomato.",
          id: "Telur poached di atas English muffin, disajikan dengan jamur, sosis, dan tomat.",
        },
      },
      {
        name: "Scrambled Egg",
        price: 30000,
        desc: {
          en: "Creamy scrambled eggs with grilled tomato and sautéed mushroom.",
          id: "Telur orak-arik lembut dengan tomat panggang dan jamur tumis.",
        },
      },
    ],
  },
  {
    id: "salads",
    label: { en: "Salads", id: "Salad" },
    items: [
      {
        name: "Grilled Chicken, Avocado & Pineapple Salad",
        price: 45000,
        desc: {
          en: "Grilled chicken with fresh avocado and sweet pineapple, lightly dressed for a balanced, refreshing bite.",
          id: "Ayam panggang dengan alpukat segar dan nanas manis, dressing ringan yang seimbang dan menyegarkan.",
        },
      },
      {
        name: "Caesar Salad",
        price: 35000,
        desc: {
          en: "Fresh romaine lettuce layered with Caesar dressing, chicken, bacon, croutons, and Parmesan.",
          id: "Selada romaine segar dengan dressing Caesar, ayam, bacon, crouton, dan Parmesan.",
        },
      },
      {
        name: "Rainbow Salad",
        price: 35000,
        tags: ["veg"],
        desc: {
          en: "Colorful garden salad of crisp lettuce, tomato, cucumber, bell pepper, and feta.",
          id: "Salad taman warna-warni: selada renyah, tomat, timun, paprika, dan keju feta.",
        },
      },
    ],
  },
  {
    id: "light-bites",
    label: { en: "Light Bites", id: "Camilan" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "Nachos",
        price: 55000,
        desc: {
          en: "Corn tortilla crisps smothered in bolognese meat, finished with guacamole and Parmesan.",
          id: "Keripik tortilla jagung dengan saus bolognese, guacamole, dan taburan Parmesan.",
        },
      },
      {
        name: "Sandwich",
        price: 40000,
        desc: {
          en: "Grilled chicken with eggs in a soft sandwich, served with French fries.",
          id: "Ayam panggang dan telur dalam roti lembut, disajikan dengan kentang goreng.",
        },
      },
      {
        name: "Vegetable Tortilla",
        price: 40000,
        tags: ["veg"],
        desc: {
          en: "Soft tortilla filled with mixed vegetables, fresh salsa, and creamy avocado.",
          id: "Tortilla lembut berisi aneka sayuran, salsa segar, dan alpukat lembut.",
        },
      },
      {
        name: "Chicken Drumstick",
        price: 35000,
        tags: ["spicy"],
        desc: {
          en: "Juicy chicken drumsticks with chili sauce and authentic sambal bajak.",
          id: "Paha ayam juicy dengan saus cabai dan sambal bajak otentik.",
        },
      },
      {
        name: "French Fries",
        price: 30000,
        tags: ["veg"],
        desc: {
          en: "Crispy golden potato fries, lightly salted and served hot.",
          id: "Kentang goreng renyah keemasan, diberi sedikit garam dan disajikan panas.",
        },
      },
      {
        name: "Spring Rolls",
        price: 30000,
        tags: ["veg"],
        desc: {
          en: "Crispy rolls filled with fresh vegetables, served with a light dipping sauce.",
          id: "Lumpia renyah berisi sayuran segar, disajikan dengan saus cocol ringan.",
        },
      },
      {
        name: "Polly Pop Corn",
        price: 20000,
        tags: ["veg"],
        desc: {
          en: "Golden kernels of corn, enriched with Parmesan and a velvety mayo dressing.",
          id: "Jagung keemasan dengan Parmesan dan dressing mayo yang lembut.",
        },
      },
    ],
  },
  {
    id: "western",
    label: { en: "Western", id: "Western" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "BBQ Pork Ribs",
        price: 120000,
        tags: ["popular"],
        desc: {
          en: "Slow-cooked pork ribs glazed in smoky BBQ sauce — tender and full of flavor.",
          id: "Iga babi dimasak perlahan dengan saus BBQ smoky — empuk dan kaya rasa.",
        },
      },
      {
        name: "Beef Burger",
        price: 95000,
        desc: {
          en: "Classic beef burger with cheddar, tomato, lettuce, and gherkin, accompanied by golden French fries.",
          id: "Burger daging sapi klasik dengan cheddar, tomat, selada, dan acar timun, plus kentang goreng.",
        },
      },
      {
        name: "Fish Dory",
        price: 90000,
        desc: {
          en: "Golden dory fillet accompanied by tartar sauce and crispy potato sides.",
          id: "Fillet dory keemasan dengan saus tartar dan kentang renyah.",
        },
      },
      {
        name: "Beef Hotdog",
        price: 85000,
        desc: {
          en: "Classic beef sausage in a bun with cheddar cheese, tomato, lettuce, and gherkin, served with French fries.",
          id: "Sosis sapi klasik dalam roti dengan cheddar, tomat, selada, dan acar timun, plus kentang goreng.",
        },
      },
      {
        name: "Crispy Calamari Rings",
        price: 60000,
        desc: {
          en: "Delicately fried calamari rings with creamy tartar sauce, served with potato wedges or fries.",
          id: "Cumi goreng renyah dengan saus tartar lembut, disajikan dengan potato wedges atau kentang goreng.",
        },
      },
      {
        name: "Healthy Food",
        price: 60000,
        tags: ["veg"],
        desc: {
          en: "Cauliflower, broccoli, green beans, sweet corn, potato, and egg, lightly cooked for a fresh, balanced dish.",
          id: "Kembang kol, brokoli, buncis, jagung manis, kentang, dan telur, dimasak ringan untuk hidangan segar dan seimbang.",
        },
      },
      {
        name: "Fish Fingers",
        price: 55000,
        desc: {
          en: "Crispy breaded fish strips, golden fried and served with a light dipping sauce.",
          id: "Stik ikan berbalur tepung, digoreng keemasan, disajikan dengan saus cocol ringan.",
        },
      },
      {
        name: "Ham & Cheese Croissant",
        price: 45000,
        desc: {
          en: "Flaky croissant layered with cheddar, garden vegetables, and smoked ham. Served with rice or fries.",
          id: "Croissant renyah berlapis cheddar, sayuran, dan smoked ham. Disajikan dengan nasi atau kentang goreng.",
        },
      },
    ],
  },
  {
    id: "pasta",
    label: { en: "Pasta", id: "Pasta" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "Spaghetti Bolognese",
        price: 90000,
        desc: {
          en: "Classic Italian spaghetti tossed in rich beef bolognese sauce, finished with Parmesan cheese.",
          id: "Spaghetti Italia klasik dengan saus bolognese daging sapi yang kaya, taburan Parmesan.",
        },
      },
      {
        name: "Spaghetti Aglio Olio",
        price: 60000,
        desc: {
          en: "Classic aglio olio pasta with sautéed garlic, chili, and chicken.",
          id: "Pasta aglio olio klasik dengan bawang putih tumis, cabai, dan ayam.",
        },
      },
      {
        name: "Spaghetti Carbonara",
        price: 60000,
        desc: {
          en: "Classic spaghetti carbonara with sautéed mushrooms, smoky bacon, and rich cream sauce.",
          id: "Spaghetti carbonara klasik dengan jamur tumis, bacon smoky, dan saus krim yang gurih.",
        },
      },
    ],
  },
  {
    id: "indonesia",
    label: { en: "Indonesia Favorites", id: "Favorit Indonesia" },
    kicker: { en: "MAHA Favorites", id: "Favorit MAHA" },
    items: [
      {
        name: "Pork Belly Fried Rice",
        price: 70000,
        desc: {
          en: "Bali-style pork belly fried rice with spices. Complete with egg, pickles, lettuce, tomatoes, cucumber, and crispy crackers.",
          id: "Nasi goreng samcan ala Bali dengan rempah. Lengkap dengan telur, acar, selada, tomat, timun, dan kerupuk renyah.",
        },
      },
      {
        name: "Chicken Satay",
        price: 60000,
        tags: ["popular"],
        desc: {
          en: "Grilled chicken skewers served with steamed rice, prawn crackers, pickled vegetables, and spicy sambal.",
          id: "Sate ayam bakar dengan nasi putih, kerupuk udang, acar, dan sambal pedas.",
        },
      },
      {
        name: "Seafood Fried Rice",
        price: 60000,
        desc: {
          en: "Special seafood fried rice (red snapper & squid) with secret spices. Served with egg, pickles, satay, and fresh vegetables.",
          id: "Nasi goreng seafood spesial (kakap merah & cumi) dengan bumbu rahasia. Disajikan dengan telur, acar, sate, dan sayuran segar.",
        },
      },
      {
        name: "BBQ Chicken Wings",
        price: 50000,
        addon: { en: "Rice +Rp 9.000", id: "Nasi +Rp 9.000" },
        desc: {
          en: "Crispy chicken wings with BBQ sauce, served with white rice.",
          id: "Sayap ayam renyah dengan saus BBQ, disajikan dengan nasi putih.",
        },
      },
      {
        name: "Crispy Chicken Leg with Green Sambal",
        price: 50000,
        tags: ["spicy"],
        desc: {
          en: "Crispy, juicy fried chicken thighs served with a drizzle of fresh spicy green chili sauce.",
          id: "Paha ayam goreng renyah dan juicy dengan siraman sambal ijo pedas segar.",
        },
      },
      {
        name: "Indonesian Fried Rice",
        price: 50000,
        desc: {
          en: "Indonesian-style chicken fried rice with spices. Served with egg, pickles, satay, and fresh vegetables.",
          id: "Nasi goreng ayam ala Indonesia dengan rempah. Disajikan dengan telur, acar, sate, dan sayuran segar.",
        },
      },
      {
        name: "Kwetiau",
        price: 45000,
        desc: {
          en: "Stir-fried flat rice noodles with vegetables, egg, sambal, acar pickles, and crispy crackers.",
          id: "Kwetiau goreng dengan sayuran, telur, sambal, acar, dan kerupuk renyah.",
        },
      },
      {
        name: "Indonesian Fried Noodles",
        price: 45000,
        desc: {
          en: "Classic Indonesian fried noodles served with chicken, fried egg, vegetables, prawn crackers, and pickles.",
          id: "Mie goreng khas Indonesia dengan ayam, telur ceplok, sayuran, kerupuk udang, dan acar.",
        },
      },
      {
        name: "Indonesian Red Snapper Curry",
        price: 120000,
        desc: {
          en: "Fresh red snapper in a fragrant, spiced Indonesian curry sauce with wok-tossed vegetables and garden greens.",
          id: "Kakap merah segar dalam kari Indonesia yang harum berbumbu, dengan sayuran tumis dan sayuran segar.",
        },
      },
      {
        name: "Indonesian Lamb Tongseng",
        price: 120000,
        addon: { en: "Rice +Rp 9.000", id: "Nasi +Rp 9.000" },
        tags: ["spicy"],
        desc: {
          en: "A flavorful, aromatic Indonesian lamb stew, sautéed with a signature wok seasoning.",
          id: "Tongseng kambing yang aromatik dan kaya rasa, ditumis dengan bumbu wajan khas.",
        },
      },
      {
        name: "Indonesian Chicken Soup",
        price: 30000,
        addon: { en: "Rice +Rp 9.000", id: "Nasi +Rp 9.000" },
        desc: {
          en: "Authentic yellow chicken soup with vegetables, vermicelli, and egg.",
          id: "Soto ayam kuning otentik dengan sayuran, soun, dan telur.",
        },
      },
      {
        name: "Chicken Lalapan",
        tags: ["spicy"],
        variants: [
          { label: { en: "¼ Chicken", id: "¼ Ayam" }, price: 60000 },
          { label: { en: "½ Chicken", id: "½ Ayam" }, price: 120000 },
        ],
        desc: {
          en: "Indonesian-style fried chicken served with rice, red & green chili sambal, and fresh vegetables.",
          id: "Ayam goreng ala Indonesia dengan nasi, sambal merah & ijo, dan lalapan segar.",
        },
      },
      {
        name: "Indonesia Fried Chicken with Water Spinach",
        tags: ["spicy"],
        variants: [
          { label: { en: "¼ Chicken", id: "¼ Ayam" }, price: 60000 },
          { label: { en: "½ Chicken", id: "½ Ayam" }, price: 120000 },
        ],
        desc: {
          en: "Indonesian-style fried chicken served with rice, water spinach, red chili sambal, sambal matah, peanuts, and crackers.",
          id: "Ayam goreng ala Indonesia dengan nasi, kangkung, sambal merah, sambal matah, kacang, dan kerupuk.",
        },
      },
      {
        name: "Galangal Fried Chicken",
        tags: ["spicy"],
        variants: [
          { label: { en: "¼ Chicken", id: "¼ Ayam" }, price: 60000 },
          { label: { en: "½ Chicken", id: "½ Ayam" }, price: 120000 },
        ],
        desc: {
          en: "Special tender fried chicken with galangal, served with rice, water spinach, red chili sauce, peanuts, and vegetables.",
          id: "Ayam goreng lengkuas spesial yang empuk, dengan nasi, kangkung, sambal merah, kacang, dan sayuran.",
        },
      },
    ],
  },
  {
    id: "chicken-katsu",
    label: { en: "Chicken Katsu Bowl", id: "Chicken Katsu Bowl" },
    kicker: { en: "Pick Your Style", id: "Pilih Gayamu" },
    items: [
      {
        name: "Chicken Katsu Bowl",
        price: 35000,
        tags: ["signature"],
        desc: {
          en: "Our signature hand-breaded chicken cutlet, fried golden and crisp, sliced over fluffy steamed short-grain rice. Pick your style (Eggs or Noodles) and your sambal (Matah, Green, or Red).",
          id: "Signature katsu ayam berbalur tangan, digoreng renyah keemasan, di atas nasi pulen. Pilih gaya (Telur atau Mie) dan sambal (Matah, Ijo, atau Merah).",
        },
      },
    ],
  },
  {
    id: "roasted",
    label: { en: "Roasted", id: "Panggang" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "Honey Roasted Chicken",
        tags: ["popular", "signature"],
        variants: [
          { label: { en: "¼ Chicken", id: "¼ Ayam" }, price: 60000 },
          { label: { en: "½ Chicken", id: "½ Ayam" }, price: 120000 },
        ],
        desc: {
          en: "Authentic honey-sauce roasted chicken. Served with rice, water spinach, red chili sambal, peanuts, fresh vegetables, and crackers.",
          id: "Ayam bakar madu otentik. Disajikan dengan nasi, kangkung, sambal merah, kacang, lalapan, dan kerupuk.",
        },
      },
      {
        name: "Whole Honey Roasted Chicken",
        price: 120000,
        desc: {
          en: "A whole authentic honey-sauce roasted chicken. Served with rice, water spinach, red chili sambal, peanuts, vegetables, and crackers.",
          id: "Ayam bakar madu utuh otentik. Disajikan dengan nasi, kangkung, sambal merah, kacang, lalapan, dan kerupuk.",
        },
      },
      {
        name: "Honey Roasted Duck",
        addon: { en: "Rice +Rp 9.000", id: "Nasi +Rp 9.000" },
        variants: [
          { label: { en: "¼ Duck", id: "¼ Bebek" }, price: 75000 },
          { label: { en: "½ Duck", id: "½ Bebek" }, price: 150000 },
        ],
        desc: {
          en: "Authentic roast duck with honey sauce. Served with rice, water spinach, red chili sauce, peanuts, vegetables, and crackers.",
          id: "Bebek panggang madu otentik. Disajikan dengan nasi, kangkung, sambal merah, kacang, lalapan, dan kerupuk.",
        },
      },
    ],
  },
  {
    id: "desserts",
    label: { en: "Desserts", id: "Hidangan Penutup" },
    kicker: { en: "MAHA Special", id: "Spesial MAHA" },
    items: [
      {
        name: "Tiramisu",
        price: 40000,
        desc: {
          en: "A traditional Italian coffee dessert — smooth and creamy, combining bold espresso with luxurious mascarpone cream.",
          id: "Dessert kopi Italia tradisional — lembut dan creamy, memadukan espresso yang kuat dengan krim mascarpone mewah.",
        },
      },
      {
        name: "Mango Panna Cotta",
        price: 35000,
        desc: {
          en: "Soft panna cotta with authentic mango sauce topping — a blend of silky texture and fresh fruit flavor.",
          id: "Panna cotta lembut dengan saus mangga otentik — perpaduan tekstur sutra dan rasa buah segar.",
        },
      },
      {
        name: "Creme Brulee",
        price: 35000,
        desc: {
          en: "Classic caramel pudding that is soft and rich, with a crispy layer of burnt sugar on top.",
          id: "Puding karamel klasik yang lembut dan kaya, dengan lapisan gula karamel renyah di atasnya.",
        },
      },
      {
        name: "Banana Dessert",
        price: 35000,
        desc: {
          en: "A sweet banana dessert served warm with a creamy cold ice cream topping.",
          id: "Dessert pisang manis disajikan hangat dengan topping es krim dingin yang lembut.",
        },
      },
      {
        name: "Pancake",
        price: 25000,
        desc: {
          en: "Fluffy golden pancake served warm with a light drizzle of syrup.",
          id: "Pancake lembut keemasan disajikan hangat dengan siraman sirup.",
        },
      },
      {
        name: "Fresh Fruit",
        price: 25000,
        tags: ["veg"],
        desc: {
          en: "Seasonal fresh fruit served chilled.",
          id: "Buah segar musiman disajikan dingin.",
        },
      },
    ],
  },
  {
    id: "signature-drinks",
    label: { en: "Signature Drinks", id: "Minuman Signature" },
    kicker: { en: "MAHA Signature", id: "Signature MAHA" },
    items: [
      {
        name: "Signature Maha Ice Coffee",
        price: 35000,
        tags: ["signature", "popular"],
        desc: {
          en: "Fresh milk blended with creamer premix and a bold double Vistretto shot.",
          id: "Susu segar dengan creamer premix dan double shot Vistretto yang bold.",
        },
      },
      {
        name: "Dirty Vanilla Latte",
        price: 35000,
        desc: {
          en: "Creamy vanilla latte layered with espresso, paired with cheesecake cream.",
          id: "Vanilla latte lembut berlapis espresso, dipadukan dengan krim cheesecake.",
        },
      },
      {
        name: "Maha Choco Chino",
        price: 35000,
        desc: {
          en: "Fresh milk blended with choco remix, creamer mix, and a bold shot of espresso.",
          id: "Susu segar dengan choco remix, creamer mix, dan shot espresso yang bold.",
        },
      },
      {
        name: "Red Velvet Ice",
        price: 35000,
        desc: {
          en: "Iced drink with a hint of vanilla and a subtle taro base.",
          id: "Minuman dingin dengan sentuhan vanila dan dasar taro yang lembut.",
        },
      },
      {
        name: "Matcha Latte",
        price: 35000,
        desc: {
          en: "Smooth Japanese matcha blended with milk, lightly sweetened for a creamy, earthy finish.",
          id: "Matcha Jepang lembut dengan susu, sedikit manis untuk sentuhan creamy dan earthy.",
        },
      },
      {
        name: "Sparkling Americano",
        price: 35000,
        desc: {
          en: "Light and effervescent Americano with a sparkling touch.",
          id: "Americano ringan dan menyegarkan dengan sentuhan berkarbonasi.",
        },
      },
    ],
  },
  {
    id: "mocktails",
    label: { en: "Mocktails", id: "Mocktail" },
    items: [
      {
        name: "Frozen Lemon Mint",
        price: 33000,
        desc: {
          en: "Refreshing blend of lemon juice, mint, and simple syrup, served ice-cold.",
          id: "Perpaduan segar jus lemon, mint, dan simple syrup, disajikan dingin.",
        },
      },
      {
        name: "Strawberry Lemoncilo",
        price: 33000,
        desc: {
          en: "Zesty lemon infused with fresh strawberry for a vibrant drink.",
          id: "Lemon segar berpadu stroberi untuk minuman yang cerah dan menyegarkan.",
        },
      },
      {
        name: "Pineapple Palm",
        price: 33000,
        desc: {
          en: "Fresh pineapple and mint infused with palm sugar and lime, finished with a crisp lemon-lime soda splash.",
          id: "Nanas dan mint segar dengan gula aren dan jeruk nipis, ditutup percikan soda lemon-lime.",
        },
      },
      {
        name: "Get Fresh",
        price: 33000,
        desc: {
          en: "A refreshing mix of fresh cucumber and mint with a bright lime finish, topped with sparkling tonic.",
          id: "Perpaduan segar timun dan mint dengan jeruk nipis, ditambah tonic berkarbonasi.",
        },
      },
    ],
  },
  {
    id: "coffee",
    label: { en: "Coffee", id: "Kopi" },
    items: [
      { name: "Americano", price: 30000 },
      { name: "Coffee Latte", price: 30000 },
      { name: "Cappuccino", price: 30000 },
      { name: "Flat White", price: 30000 },
      { name: "Long Black", price: 30000 },
    ],
  },
  {
    id: "juice",
    label: { en: "Juices", id: "Jus" },
    items: [
      {
        name: "Fresh Juice",
        price: 35000,
        tags: ["veg"],
        desc: {
          en: "Pineapple · Watermelon · Honeydew · Orange · Strawberry.",
          id: "Nanas · Semangka · Melon · Jeruk · Stroberi.",
        },
      },
      {
        name: "Chill Juice",
        price: 30000,
        tags: ["veg"],
        desc: {
          en: "Orange · Pineapple · Apple · Lemon.",
          id: "Jeruk · Nanas · Apel · Lemon.",
        },
      },
    ],
  },
  {
    id: "milkshake",
    label: { en: "Milkshakes & Ice", id: "Milkshake & Es" },
    items: [
      {
        name: "MAHA Es Teler",
        price: 35000,
        tags: ["popular"],
        desc: {
          en: "A refreshing blend of avocado, jackfruit, and nata de coco with a rich, creamy, savory sauce.",
          id: "Perpaduan segar alpukat, nangka, dan nata de coco dengan kuah santan yang creamy dan gurih.",
        },
      },
      {
        name: "MAHA Es Buah",
        price: 30000,
        desc: {
          en: "Fresh fruit ice with dragon fruit, mango, watermelon, and melon, with nata de coco, cocopandan syrup, and condensed milk.",
          id: "Es buah segar dengan buah naga, mangga, semangka, dan melon, ditambah nata de coco, sirup cocopandan, dan susu kental manis.",
        },
      },
      {
        name: "Cookie & Cream Milkshake",
        price: 37000,
        desc: {
          en: "A classic blend of Oreo and soft vanilla ice cream.",
          id: "Perpaduan klasik Oreo dan es krim vanila lembut.",
        },
      },
      {
        name: "Strawberry Milkshake",
        price: 35000,
        desc: {
          en: "A sweet, refreshing combination of real strawberries and smooth vanilla ice cream.",
          id: "Perpaduan manis dan segar stroberi asli dengan es krim vanila lembut.",
        },
      },
      {
        name: "Chocolate Milkshake",
        price: 35000,
        desc: {
          en: "A creamy chocolate drink combining vanilla ice cream and fresh milk.",
          id: "Minuman cokelat creamy dengan es krim vanila dan susu segar.",
        },
      },
      {
        name: "More Milkshake",
        price: 35000,
        desc: {
          en: "Banana · Mango · Dragon Fruit.",
          id: "Pisang · Mangga · Buah Naga.",
        },
      },
      {
        name: "Lychee Ice Tea",
        price: 25000,
        desc: {
          en: "The perfect blend of black tea with the authentic, refreshing sweetness of lychee.",
          id: "Perpaduan teh hitam dengan manis segar leci yang otentik.",
        },
      },
      {
        name: "Lemon Ice Tea",
        price: 25000,
        desc: {
          en: "Cold black tea with a squeeze of fresh lemon for a perfect sweet-and-sour balance.",
          id: "Teh hitam dingin dengan perasan lemon segar untuk keseimbangan manis dan asam.",
        },
      },
    ],
  },
  {
    id: "drinks",
    label: { en: "Other Drinks", id: "Minuman Lainnya" },
    items: [
      { name: "Coke", price: 30000 },
      { name: "Sprite", price: 30000 },
      { name: "Tonic", price: 30000 },
      { name: "Hot / Ice Tea", price: 17000 },
      {
        name: "Mineral Water",
        variants: [
          { label: { en: "Plastic Bottle", id: "Botol Plastik" }, price: 10000 },
          { label: { en: "Glass Bottle", id: "Botol Kaca" }, price: 20000 },
        ],
      },
    ],
  },
];

/** Flat list of items tagged popular/signature, for the "Signatures" highlight. */
export const signatureItems: { item: MenuItem; category: string }[] = menu
  .flatMap((cat) =>
    cat.items.map((item) => ({ item, category: cat.id })),
  )
  .filter(({ item }) => item.tags?.includes("popular") || item.tags?.includes("signature"));

export const menuStats = {
  categories: menu.length,
  items: menu.reduce((n, c) => n + c.items.length, 0),
};
