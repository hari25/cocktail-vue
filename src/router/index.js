import Vue from 'vue'
//import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Import the styles directly. (Or you could add them via script tags.)
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter)
//Vue.use(BootstrapVue);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drink',
    name: 'Drink',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Drink.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

// const router = new VueRouter({
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//       console.log(to, from, savedPosition);
//       if (savedPosition) {
//           return savedPosition;
//       } else{
//         const position = {};
//       if (to.hash) {
//           position.selector = to.hash;
//           if(document.querySelector(to.hash)){
//             return position;
//           }
//           return false;
//         }
//       }
//   }
// })

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
})

export default router
