export type Status = 'open' | 'done' | 'delivered'

export interface OrderItem {
  id: string
  name: string
  observation?: string 
  status: Status
}

export interface Order {
  id: string,
  client: string,
  items: OrderItem[]
}