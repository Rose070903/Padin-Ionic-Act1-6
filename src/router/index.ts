import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Footer.vue';
import Footer from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
    },
 
    {
    path: '/tabs/',
    component : Footer,
    children: [
      {
        path: '/index',
        component: () => import('@/views/index/rose.vue')
      },
        {
          path: '/Act-1',
          component: () => import('@/views/Act-1/index.vue')
        },
        {
          path: '//Act-2',
          component: () => import('@/views/Act-2/index.vue')
        },
        {
          path: '//Act-3',
          component: () => import('@/views/Act-3/index.vue')
        },
        {
          path: '//Act-4',
          component: () => import('@/views/Act-4/index.vue')
        },
        {
          path: '//Act-5',
          component: () => import('@/views/Act-5/index.vue')
        },
        {
          path: '//Act-6',
          component: () => import('@/views/Act-6/index.vue')
        },
       ]
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
