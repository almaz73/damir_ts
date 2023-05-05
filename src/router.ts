import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: () => import( '@/kt/KT.vue')},
    {path: '/#ambulance/2/callcard/:id', component: () => import( '@/kt/KT.vue')},
    {path: '/custom-elementplus', component: () => import( '@/develop/CustomElementPlus.vue')},
    {path: '/login', component: () => import('@/components/Password.vue')},
    {path: "/:catchAll(.*)", component: () => import('@/components/NotFound.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
