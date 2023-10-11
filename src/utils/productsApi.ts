import {
  IProduct,
  IProductRequest,
  IProductResponse,
} from '../components/products/IProduct';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/registers/products`;

export async function getProducts(): Promise<IProduct[]> {
  const products: IProduct[] = [];
  const { items } = await api.get(API_URL);
  const receivedProducts = items.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    categoryId: product.categoryId,
  }));

  products.push(...receivedProducts);

  return products;
}

export async function createProduct(product: IProductRequest): Promise<IProductResponse> {
  const { item } = await api.post(API_URL, product);

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    categoryId: item.categoryId,
  };
}