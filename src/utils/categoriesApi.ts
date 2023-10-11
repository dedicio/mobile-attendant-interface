import { ICategory, ICategoryRequest } from '../components/products/ICategory';
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

export async function createCategory(category: ICategoryRequest): Promise<ICategory> {
    validateCategory(category);
    const payload = {
      name: category.name,
    }
    const item = await api.post(API_URL, payload);

    return {
      id: item.id,
      name: item.name,
    };
}

function validateCategory(category: ICategoryRequest) {
    const { name } = category;

    if (!name) {
      throw new Error('O campo nome é obrigatório');
    }
}