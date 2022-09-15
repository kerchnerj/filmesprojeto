<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Categorias</RouterLink>
      <RouterLink to="/filmes">Filmes</RouterLink>
      <RouterLink to="/series">Séries</RouterLink>
      <RouterLink to="/animes">Animes</RouterLink>
      <RouterLink to="/login"> Minha Conta</RouterLink>
    </nav>
    <div class="icon">
      <i class="bx bx-search-alt" style="color: rgba(0, 0, 0, 0.03)"></i>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/style.css";

body {
  margin: 0;
  padding: 0;
  color: #6593a6;
}

header {
  height: 30px;
  background-color: #03658c;
  padding: 25px;
}
</style>
