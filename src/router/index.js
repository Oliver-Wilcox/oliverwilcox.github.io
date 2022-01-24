import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import relReady from '../views/relReady.vue'
import Breakpack from "../views/Breakpack.vue"
import Boardroom from "../views/Boardroom.vue"
import Peregrine from "../views/Peregrine.vue"
import Sundace from "../views/Sundace.vue"
import Horogium from "../views/Horogium.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Relationship-Ready',
    name: 'Relationship-Ready',
    component: relReady
  },
  {
    path: '/Breakpack',
    name: 'Breakpack',
    component: Breakpack
  },
  {
    path: '/Boardroom',
    name: 'Boardroom',
    component: Boardroom
  },
  {
    path: '/Peregrine',
    name: 'Peregrine',
    component: Peregrine
  },
  {
    path: '/Sundace',
    name: 'Sundace',
    component: Sundace
  },
  {
    path: '/Horogium',
    name: 'Horogium',
    component: Horogium
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("scrollview").scrollIntoView();
  },
})

export default router
