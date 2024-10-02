import { createRouter, createWebHistory } from 'vue-router'
import TestModule from '@/views/TestModule.vue'
import HomePage from '@/views/HomePage.vue'
import CollectionList from '@/components/CollectionList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/test',
      name: 'test',
      component: TestModule
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/CollectionList',
      name: 'Collection',
      component: CollectionList
    }
  ]
})

export default router
