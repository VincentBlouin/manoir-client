import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/caracteristique/:slug/',
        name: 'Caracteristique',
        component: () => import('../views/CaractéristiquePage')
    },
    {
        path: '/non-caracteristique/:slug/',
        name: 'NonCaracteristique',
        component: () => import('../views/CaractéristiquePage')
    },
    {
        path: '/caracteristiques',
        name: 'Caracteristiques',
        component: () => import('../views/CaractéristiquesPage')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/ArticlesPage')
    },
    {
        path: '/pret-solidaire',
        name: 'PretSolidaire',
        component: () => import('../views/PretSolidaire')
    },
    {
        path: '/le-projet',
        name: 'LeProjet',
        component: () => import('../views/LeProjet')
    },
    {
        path: '/images',
        name: 'Images',
        component: () => import('../views/ImagesPage')
    },
    {
        path: '/:slug/',
        name: 'Article',
        component: () => import('../views/ArticlePage')
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
