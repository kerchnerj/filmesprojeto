import { createRouter, createWebHistory } from "vue-router";
import CategoriasView from "../views/CategoriasView.vue";
import FilmesView from "../views/FilmesView.vue";
import LoginView from "../views/LoginView.vue";
import AtoresView from "../views/AtoresView.vue";


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
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/atores",
      name: "atores",
      component: AtoresView,
    },
  ],
});

export default router;
