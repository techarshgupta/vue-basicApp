import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition){
      return savedPosition
    }
    if (to.hash){
      return {selector: to.hash}
    }
    return{
      x:0,
      y:0
    }
  },
});

router.beforeEach( (to, from, next)=>{
  // if (to.path === "/user") {
  //   next('/')
  // }else {
  //   next()
  // }
  next();
});

new Vue({
    el:'#app',
    router,
    render: h => h(App)
});
