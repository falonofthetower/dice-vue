import Vue from "vue";
import Router from "vue-router";

import Rolls from "./views/Rolls";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/rolls",
      component: Rolls,
    },
    {
      path: "*",
      redirect: "/rolls",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
