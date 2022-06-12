import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Works from '../views/Works.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Works
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works/b1house',
    name: 'B1House',
    component: () => import(/* webpackChunkName: "b1house" */ '../views/works/B1House.vue')
  },
  {
    path: '/works/jissoku',
    name: 'Jissoku',
    component: () => import(/* webpackChunkName: "jissoku" */ '../views/works/Jissoku.vue')
  },
  {
    path: '/works/people_plot',
    name: 'PeoplePlot',
    component: () => import(/* webpackChunkName: "people_plot" */ '../views/works/PeoplePlot.vue')
  },

  {
    path: '/works/hny2022',
    name: 'HNY2022',
    component: () => import(/* webpackChunkName: "hny2022" */ '../views/works/HNY2022.vue')
  },
  {
    path: '/works/sign_ui_gen',
    name: 'SignUIgen',
    component: () => import(/* webpackChunkName: "sign_ui_gen" */ '../views/works/SignUIgen.vue')
  },
  {
    path: '/works/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/works/Portfolio.vue')
  },
  {
    path: '/works/bitmap_font',
    name: 'BitmapFont',
    component: () => import(/* webpackChunkName: "bitmap_font" */ '../views/works/BitmapFont.vue')
  },
  {
    path: '/works/wordle',
    name: 'Wordle',
    component: () => import(/* webpackChunkName: "wordle" */ '../views/works/Wordle.vue')
  },
  {
    path: '/works/paraglyph',
    name: 'Paraglyph',
    component: () => import(/* webpackChunkName: "paraglyph" */ '../views/works/Paraglyph.vue')
  },

  {
    path: '/works/petabo',
    name: 'Petabo',
    component: () => import(/* webpackChunkName: "petabo" */ '../views/works/Petabo.vue')
  },
  {
    path: '/works/chair',
    name: 'Chair',
    component: () => import(/* webpackChunkName: "chair" */ '../views/works/Chair.vue')
  },
  {
    path: '/works/circuit',
    name: 'Circuit',
    component: () => import(/* webpackChunkName: "circuit" */ '../views/works/Circuit.vue')
  },
  {
    path: '/works/unit',
    name: 'Unit',
    component: () => import(/* webpackChunkName: "unit" */ '../views/works/Unit.vue')
  },
  {
    path: '/works/hny2021',
    name: 'HNY2021',
    component: () => import(/* webpackChunkName: "hny2021" */ '../views/works/HNY2021.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
