import { defineStore } from 'pinia'
import { IOrder } from '../components/orders/IOrder'

export type OrdersState = {
  orders: IOrder[],
}

export type OrdersActions = {
    updateOrders: (orders: IOrder[]) => void,
    getOrderById: (id: string) => IOrder | undefined,
}

export const useOrdersStore = defineStore<'orders', OrdersState, {}, OrdersActions> ({
    id: 'orders',
    state: () => {
        const ordersLocalStorage: string | null = localStorage.getItem('orders')
        const orders = ordersLocalStorage
            ? JSON.parse(ordersLocalStorage)
            : []

        return {
            orders,
        }
    },
    actions: {
        updateOrders(orders: IOrder[]) {
            this.orders = orders
            localStorage.setItem('orders', JSON.stringify(orders))
        },

        getOrderById(id: string) {
            return this.orders.find(order => order.id === id)
        },
    }
})