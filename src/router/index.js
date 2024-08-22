import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Ticket",
      name: "Ticket",
      component: () => import("../components/Ticket.vue"),
    },
    {
      path: "/Contach",
      name: "Contach",
      component: () => import("../components/Contach.vue"),
    },
    {
      path: "/Moviename",
      name: "Moviename",
      component: () => import("../components/Moviename.vue"),
    },
  ],
});

export default router;
