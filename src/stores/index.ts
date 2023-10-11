import { defineStore } from 'pinia'
import { router } from '../routes'
import { api } from '../utils/api'

export type AuthState = {
    user: {
        token: string,
        id: string,
        company_id: string,
    } | null,
    returnUrl: string | null
}

export type AuthActions = {
    login: (email: string, password: string) => Promise<void>,
    logout: () => void
}

const apiUrl: string = `${import.meta.env.VITE_API_URL}/account`

export const useAuthStore = defineStore<'auth', AuthState, {}, AuthActions> ({
    id: 'auth',
    state: () => {
        const userLocalStorage: string | null = localStorage.getItem('user')
        const user = userLocalStorage
            ? JSON.parse(userLocalStorage)
            : null

        return {
            user,
            returnUrl: null,
        }
    },
    actions: {
        async login(email: string, password: string) {
            const user = await api.post(`${apiUrl}/login`, { email, password })

            this.user = user

            localStorage.setItem('user', JSON.stringify(user))

            router.push(this.returnUrl || '/')
        },
        logout() {
            this.user = null
            localStorage.removeItem('user')
            router.push('/login')
        }
    }
})