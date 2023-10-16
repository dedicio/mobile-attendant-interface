export type Status = 'open' | 'pending' | 'paid' | 'canceled'

export interface IOrderItem {
  id: string
  product: string
  quantity: number
  price: number
}

export interface IOrder {
  id: string,
  positionId: string,
  items?: IOrderItem[],
  status: Status
  paymentMethod?: string,
}

export interface IOrderRequest {
  positionId: string,
  items?: IOrderItem[],
  status: Status,
  paymentMethod?: string,
}