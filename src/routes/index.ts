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
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login']
    const authRequired = !publicPages.includes(to.path)
    const auth: Store<'auth', AuthState, {}, AuthActions> = useAuthStore()

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath
        return '/login'
    }
})
