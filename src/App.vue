<template>
  <!-- paola -->
  <Menu_inicio/>
  <!-- nayeli y andrea -->
  <Contenedor/>
  <!-- daniel -->
  <Pie_pagina/>

</template>

<script>
import Menu_inicio from './components/menu.vue';
import Contenedor from './components/contenedor.vue';
import Pie_pagina from './components/pie_pagina.vue';


export default {
  name: 'App',
  components: {
    Menu_inicio,
    Contenedor,
    Pie_pagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
