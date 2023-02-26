import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
        path: '/property',
        name: 'Property',
        component: () => import(/* webpackChunkName: "about" */ '../views/PropertyView.vue')
    },
    {
        path: '/blog',
        name: 'OurBlog',
        component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: "active",
  routes
})

export default router
