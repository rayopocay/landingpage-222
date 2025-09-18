import { createRouter, createWebHistory } from 'vue-router'
import ContenedorView from '@/views/ContenedorView.vue'
import ConciertosView from '@/views/ConciertosView.vue'
import AlbunesView from '@/views/AlbunesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ContenedorView
  },
  {
    path: '/conciertos',
    name: 'conciertos',
    component: ConciertosView
  },
  {
    path: '/albunes',
    name: 'albunes',
    component: AlbunesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
