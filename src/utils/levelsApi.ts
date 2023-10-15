import {
  ILevel,
  ILevelRequest,
  ILevelResponse,
} from '../components/users/ILevel';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/accounts/levels`;

export async function getLevels(): Promise<ILevel[]> {
  const levels: ILevel[] = [];
  const { items } = await api.get(API_URL);

  if (items) {
    const receivedLevels = items.map((level: any) => ({
      id: level.id,
      name: level.name,
      description: level.description,
      price: level.price,
      image: level.image,
      categoryId: level.categoryId,
    }));
  
    levels.push(...receivedLevels);
  }

  return levels;
}

export async function createLevel(level: ILevelRequest): Promise<ILevelResponse> {
  validateLevelRequest(level);
  const payload = {
    name: level.name,
  }
  const item = await api.post(API_URL, payload);

  return {
    id: item.id,
    name: item.name,
  };
}

function validateLevelRequest(level: ILevelRequest) {
  const { name } = level;

  if (!name) {
    throw new Error('O campo nome é obrigatório');
  }
}