import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Houses",
        component: () =>
          import(
            /* webpackChunkName: "Houses" */ "@/views/Home/Houses/index.vue"
          ),
      },
      {
        path: "students/:house",
        name: "Students",
        component: () =>
          import(
            /* webpackChunkName: "Students" */ "@/views/Home/Students/index.vue"
          ),
      },
      {
        path: "staff",
        name: "Staff",
        component: () =>
          import(/* webpackChunkName: "Staff"*/ "@/views/Home/Staff/index.vue"),
      },
      {
        path: "allCharacters",
        name: "AllCharacters",
        component: () =>
          import(
            /* webpackChunkName: "All"*/ "@/views/Home/AllCharacters/index.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/Index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
