import { ICategory } from '../components/products/ICategory';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/registers/categories`;

export async function getCategories(): Promise<ICategory[]> {
    const categories: ICategory[] = [];
    const { items: categoriesItems } = await api.get(API_URL)
    const receivedCategories = categoriesItems.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));

    categories.push(...receivedCategories);

    return categories;
}