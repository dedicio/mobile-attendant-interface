export interface IPosition {
    id: string,
    name: string,
    description?: string,
    groupId: string,
}

export interface IPositionRequest {
    name: string,
    description?: string,
    groupId: string,
}

export type PositionOrder = {
    orderId: string,
    status: string,
}

export type PositionWithOrder = IPosition & {
    order?: PositionOrder,
}