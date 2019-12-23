import Vue from 'vue'
import VueRouter from 'vue-router'
import Boards from '../views/Boards.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'boards',
    component: Boards,
    children: [
      {
        path: 'card/:id',
        component: () => import('../views/boards/Card.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
