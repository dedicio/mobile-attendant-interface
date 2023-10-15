import { Store } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, AuthState, AuthActions } from '../stores'
import { HomeView, LoginView } from '../views'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        { path: '/products', component: () => import('../views/ProductsView.vue') },
        { path: '/orders', component: () => import('../views/OrdersView.vue') },
        { path: '/checks', component: () => import('../views/ChecksView.vue') },
        { path: '/positions', component: () => import('../views/PositionsView.vue') },
        {
            path: '/admin',
            component: () => import('../views/AdminView.vue'),
            meta: {
                permissions: ['Administrador'],
            },
        },
    ]
})

router.beforeEach(async (to) => {
    const publicPages = [
        '/login',
        '/register',
    ]
    const authRequired = !publicPages.includes(to.path)
    const auth: Store<'auth', AuthState, {}, AuthActions> = useAuthStore()

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath
        return '/login'
    }

    if (to.meta.permissions) {
        const hasPermission = to.meta.permissions.includes(auth.user?.level)

        if (!hasPermission) {
            return '/'
        }
    }
})
