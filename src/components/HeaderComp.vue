<script>
export default {};
</script>
<template>
  <header>
    <div class="menu-esquerdo">
      <span>|</span>
      <span>
        <RouterLink to="/Categorias">Categorias</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/Filmes">Filmes</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/Login">Minha conta</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/Atores">Atores</RouterLink>
      </span>
    </div>
    <div class="menu-direito">
      <div class="icon"> </div>
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}
header {
  height: 15%;
  font-size: 1.3rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
