// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'experience',
        name: 'Experience',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Experience.vue'),
      },
      {
        path: 'education',
        name: 'Education',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Education.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Blog.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
