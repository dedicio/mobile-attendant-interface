import {
  IOrder,
  IOrderRequest,
} from '../components/orders/IOrder';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/transactions/orders`;

export async function getOrders(): Promise<IOrder[]> {
  const orders: IOrder[] = [];
  const { items } = await api.get(API_URL);

  if (items) {
    const receivedOrders = items.map((order: any) => ({
      id: order.id,
      name: order.name,
      description: order.description,
      price: order.price,
      image: order.image,
      categoryId: order.categoryId,
    }));
  
    orders.push(...receivedOrders);
  }

  return orders;
}

export function createOrder(order: IOrderRequest) {
  validateOrderRequest(order);
  const items = order.items?.map(item => ({
    id: item.id,
    product_id: item.product,
    quantity: item.quantity,
    price: item.price,
  }));
  const payload = {
    position_id: order.positionId,
    items,
    status: order.status,
  }
  return api.post(API_URL, payload);
}

function validateOrderRequest(order: IOrderRequest) {
  const { items, positionId, paymentMethod } = order;

  if (!positionId || !paymentMethod || !items || !items.length) {
    throw new Error('Os campos mesa, items e método de pagamento são obrigatórios');
  }
}