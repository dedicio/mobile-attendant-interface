import {
  IUser,
  IUserRequest,
  IUserResponse,
} from '../components/users/IUser';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/accounts/users`;

export async function getUsers(): Promise<IUser[]> {
  const users: IUser[] = [];
  const { items } = await api.get(API_URL);

  if (items) {
    const receivedUsers = items.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      levelId: user.levelId,
    }));
  
    users.push(...receivedUsers);
  }

  return users;
}

export async function createUser(user: IUserRequest): Promise<IUserResponse> {
  validateUserRequest(user);
  const payload = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    level_id: user.levelId,
  }
  const item = await api.post(API_URL, payload);

  return {
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    levelId: item.levelId,
  };
}

function validateUserRequest(user: IUserRequest) {
  const { name, email, password, levelId } = user;

  if (!name || !email || !password || !levelId) {
    throw new Error('Os campos nome, e-mail, senha e nível são obrigatórios');
  }
}