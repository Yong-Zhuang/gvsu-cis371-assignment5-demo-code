type Product = {
  name: string;

  description: string;

  price: number;

  rating: number;

  stock: number;

  image: string;

  category: string;
};

type ProductDoc = {
  id: string;
  data: Product;
};

export type { Product, ProductDoc };
