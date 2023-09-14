import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: () => import('../components/Travel.vue')
    },
    {
        path: '/add',
        component: () => import('../components/Add.vue')
    },
    {
        path: '/update/:id',
        name: 'update',
        component: () => import('../components/Updatee.vue')
    }
]
})

export default router