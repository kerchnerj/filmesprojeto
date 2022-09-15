import { createRouter, createWebHistory } from "vue-router";
import CategoriasView from "../views/CategoriasView.vue";
import FilmesView from "../views/FilmesView.vue";
import AnimesView from "../views/AnimesView.vue";
import SeriesView from "../views/SeriesView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },

    {
      path: "/animes",
      name: "animes",
      component: AnimesView,
    },

    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
