export interface IUser {
  id: string,
  name: string,
  email: string,
  phone: string,
  level: string,
}

export interface IUserRequest {
  name: string,
  email: string,
  phone?: string,
  password: string,
  levelId: string,
}

export interface IUserResponse {
  id: string,
  name: string,
  email: string,
  phone: string,
  levelId: string,
}