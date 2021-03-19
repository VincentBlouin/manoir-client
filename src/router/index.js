import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/caracteristique/:slug/',
        name: 'Caracteristique',
        component: () => import('../views/Caractéristique')
    },
    {
        path: '/non-caracteristique/:slug/',
        name: 'NonCaracteristique',
        component: () => import('../views/Caractéristique')
    },
    {
        path: '/caracteristiques',
        name: 'Caracteristiques',
        component: () => import('../views/Caractéristiques')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/Articles')
    },
    {
        path: '/pret-solidaire',
        name: 'PretSolidaire',
        component: () => import('../views/PretSolidaire')
    },
    {
        path: '/:slug/',
        name: 'Article',
        component: () => import('../views/Article')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        savedPosition
                    });
                }, 1000);
            });
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
