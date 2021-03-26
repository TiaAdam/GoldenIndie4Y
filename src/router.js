import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/film",
      name: "film",
      component: () => import("./views/Film.vue"),
    },
    // Reviews folder
    {
      path: "/reviews",
      name: "reviews_index",
      component: () => import("./views/reviews/Index.vue"),
    },
    {
      path: "/reviews/create",
      name: "reviews_create",
      component: () => import("./views/reviews/Create.vue"),
    },
    {
      path: "/reviews/:id",
      name: "reviews_show",
      component: () => import("./views/reviews/Show.vue"),
    },
  
    {
      path: "/reviews/:id/edit",
      name: "reviews_edit",
      component: () => import("./views/reviews/Edit.vue"),
    },
    // Articles folder
    {
      path: "/articles",
      name: "articles_index",
      component: () => import("./views/articles/Index.vue"),
    },
    {
      path: "/articles/create",
      name: "articles_create",
      component: () => import("./views/articles/Create.vue"),
    },
    {
      path: "/articles/:id",
      name: "articles_show",
      component: () => import("./views/articles/Show.vue"),
    },
  
    {
      path: "/articles/:id/edit",
      name: "articles_edit",
      component: () => import("./views/articles/Edit.vue"),
    },
    // REGISTER AND LOGIN ROUTES 
    {
      path: "/register",
      name: "register_index",
      component: () => import("./views/register/Index.vue"),
    },
    {
      path: "/login",
      name: "login_index",
      component: () => import("./views/login/Index.vue"),
    },
  ],
});
