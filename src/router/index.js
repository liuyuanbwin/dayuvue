import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource'
import Manage from '@/components/Manage';
import HomePage from '@/components/HomePage';
import Login from '@/components/Login';

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/hello',
      name: 'Manage',
      component: Manage,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false,
      },
    },
  ],
  mode: "history"
});
