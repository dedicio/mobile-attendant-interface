export interface IProduct {
  id: string
  name: string
  image: string
  price: number
  category: string
  description?: string
}

export interface IProductRequest {
  name: string,
  description?: string,
  price: number,
  image?: string,
  categoryId: string,
}

export interface IProductResponse {
  id: string,
  name: string,
  description: string,
  price: number,
  image: string,
  categoryId: string,
}