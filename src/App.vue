<script setup>
import { RouterLink, RouterView } from "vue-router";
import CardsComp from "@/components/CardsComp.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Categorias</RouterLink>
      <RouterLink to="/filmes">Filmes</RouterLink>
      <RouterLink to="/atores">Atores</RouterLink>
      <RouterLink to="/login"> Minha Conta</RouterLink>
    </nav>
  </header>
  <CardsComp />
  <CardsComp />
  <CardsComp />
  <CardsComp />
  <CardsComp />

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
  background-color: #0b2029;
  padding: 25px;
}
</style>
