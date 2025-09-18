import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})

export default router
