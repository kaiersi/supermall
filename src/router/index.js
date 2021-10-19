import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/supermall/',
            redirect: '/supermall/home'
        },
        {
            path: '/supermall/dist',
            redirect: '/supermall/home'
        },
        {
            path: '/supermall/home',
            component: () => import('views/home/Home.vue')
        },
        {
            path: '/supermall/detail',
            component: () => import('views/detail/Detail.vue'),
        },
        {
            path: '/supermall/category',
            component: () => import('views/category/Category.vue')
        },
        {
            path: '/supermall/cart',
            component: () => import('views/cart/Cart.vue')
        },
        {
            path: '/supermall/profile',
            component: () => import('views/profile/Profile.vue')
        }
    ],
    mode: 'history'
    
})

