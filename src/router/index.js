import Vue from "vue";
import VueRouter from "vue-router";
import SpidersView from '../views/SpidersView.vue'
import MatchesView from '../views/MatchesView.vue'
import UploadView from '../views/UploadView.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name:'Home',
    component: Home
  },
  {
    path: "/SpidersView",
    name: "SpidersView",
    component: SpidersView
  },
  {
    path: '/MatchesView',
    name: 'MatchesView',
    component: MatchesView
  },
  {
    path: '/UploadView',
    name: 'UploadView',
    component: UploadView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
