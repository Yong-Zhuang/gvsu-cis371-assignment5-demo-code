import { Product } from "./data-types";

export const init_products: Product[] = [
  {
    name: "Gamer's Delight Laptop",
    description:
      "A powerful gaming laptop with top-tier graphics and performance for immersive gaming experiences.",
    price: 1200,
    rating: 4,
    stock: 5,
    //a fake image
    image:
      "https://m.media-amazon.com/images/I/31TcnQiBTpL._AC_UF894,1000_QL80_.jpg",
    category: "Electronics",
  },
  // More Electronics
  {
    name: "SmartTech Pro Phone",
    description:
      "Experience cutting-edge technology with our latest SmartTech Pro, featuring an ultra-responsive display and superior camera quality.",
    price: 800,
    rating: 5,
    stock: 10,
    image: "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg",
    category: "Electronics",
  },
  // ... Add more electronics items ...
  {
    name: "Rapid Dual USB-C Charger",
    description:
      "Efficiently power up your devices with our compact, high-speed USB-C charging brick designed for the modern tech-savvy user.",
    price: 12,
    rating: 4,
    stock: 20,
    image:
      "https://d1b5h9psu9yexj.cloudfront.net/45024/Spigen-PowerArc-ArcStation-Pro_20210512-160334_full.jpeg",
    category: "Electronics",
  },

  // Clothing
  {
    name: "Classic Comfort Tee",
    description:
      "Crafted for comfort, our soft and breathable t-shirt is perfect for personal customization or stylish everyday wear.",
    price: 20,
    rating: 4,
    stock: 25,
    image:
      "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/091B833490D74F4C87D5CE3767E806C7/MP236558_11.jpg",
    category: "Clothing",
  },
  {
    name: "SleekFit Denim Jeans",
    description:
      "Stay trendy with our Slim Fit Jeans, offering both comfort and style with durable, high-quality denim.",
    price: 45,
    rating: 3,
    stock: 15,
    image:
      "https://benzakdenimdevelopers.com/cdn/shop/products/BDD-006-loomstate-denim-15-oz-RHT-0_720x.jpg?v=1664551915",
    category: "Clothing",
  },
  // ... Add more clothing items ...
  {
    name: "PatternPop Fancy Socks",
    description:
      "Add a splash of fun to your outfit with our vibrant, patterned socks, combining style with everyday comfort.",
    price: 15,
    rating: 4.8,
    stock: 7,
    image:
      "https://goldiesocks.com/cdn/shop/products/mens-sock-argyle-blue-goldie-socks_540x.jpg?v=1541354007",
    category: "Clothing",
  },

  // Groceries
  {
    name: "Crispy Red Apples",
    description:
      "Enjoy the natural sweetness of our freshly-picked, juicy red apples, perfect for a healthy snack.",
    price: 0.5,
    rating: 4,
    stock: 100,
    image: "https://5.imimg.com/data5/MG/WX/MY-1600400/fresh-apple-500x500.jpg",
    category: "Groceries",
  },
  {
    name: "Hearty Whole Grain Bread",
    description:
      "Indulge in the wholesome goodness of our whole grain bread, baked fresh for a nutritious and delicious choice.",
    price: 2,
    rating: 4,
    stock: 20,
    image: "https://vimafoods.com/wp-content/uploads/panecillo-vima-foods.jpg",
    category: "Groceries",
  },
  {
    name: "Crunchy Delight Cashews",
    description:
      "Savor the rich, nutty flavor of our premium cashews, ideal for a healthy, energizing snack.",
    price: 4,
    rating: 3,
    stock: 56,
    image:
      "https://www.farmfreshnuts.com/wp-content/uploads/2018/02/Cashews-DRS.jpg",
    category: "Groceries",
  },
];
