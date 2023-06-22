type IProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  status: string;
  points_cost: number;
  created_at: Date;
  updated_at: Date;
};

type IProductForm = {
  name: string;
  description: string;
  price: number;
  weight: number;
  points_cost: number;
};

type IUpdateProductResponse = {
  data: {
    product: IProduct;
    token: string;
    message: string;
  }
}

type IProductsResponse = {
  data: {
    products: IProduct[];
  }
}