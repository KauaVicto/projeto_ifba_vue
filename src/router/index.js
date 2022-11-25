import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: () => import(/* webpackChunkName: "cadastrar" */ '../views/CadastrarView.vue')
  },
  {
    path: '/calcado/:id',
    name: 'calcado',
    component: () => import(/* webpackChunkName: "calcado" */ '../views/CalcadoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
