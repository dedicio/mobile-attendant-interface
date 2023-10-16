import { defineStore } from 'pinia'
import { IOrder } from '../components/orders/IOrder'
import * as ordersApi from '../utils/ordersApi'

export type OrdersState = {
  orders: IOrder[],
}

export type OrdersActions = {
    updateOrders: (orders: IOrder[]) => void,
    getOrderById: (id: string) => IOrder | undefined,
    updateOrder: (order: IOrder) => void,
    getNewOrderId: () => string,
    addOrder: (order: IOrder) => void,
    closeOrder: (order: IOrder) => void,
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

        updateOrder(order: IOrder) {
            const index = this.orders.findIndex(o => o.id === order.id)
            this.orders[index] = order
            this.updateOrders(this.orders)
        },

        getNewOrderId() {
            return crypto.randomUUID()
        },

        addOrder(order: IOrder) {            
            this.orders.push(order)
            this.updateOrders(this.orders)
        },

        async closeOrder(order: IOrder) {
            await ordersApi.createOrder(order)
            const index = this.orders.findIndex(o => o.id === order.id)
            this.orders.splice(index, 1)
            this.updateOrders(this.orders)
        },
    }
})