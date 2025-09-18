<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">
          <img src="https://crystalpng.com/wp-content/uploads/2023/04/BTS-Logo.png" alt="Logo" class="logo">
        </a>

        <!-- Botón hamburguesa -->
        <button class="hamburger" @click="toggleMenu">
          ☰
        </button>

        <!-- Menú -->
        <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
          <li class="nav-item">
            <router-link to="/" @click="toggleMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path:'/conciertos'}" @click="toggleMenu">Conciertos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path:'/albunes'}" @click="toggleMenu">Albunes</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
    <Pie_pagina/>
  </div>
</template>

<script>
import { ref } from "vue";
import Pie_pagina from './components/pie_pagina.vue';

export default {
  name: 'App',
  components: {
    Pie_pagina
  },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu
    };
  }
}
</script>

<style>
html, body {
  margin: 0;  
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* asegura altura completa */
}

main {
  flex: 1;
  padding: 20px;
}

.navbar {
  background-color: #d4a4f7;
  border-bottom: 1px solid #b899c7;
  padding: 10px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.logo {
  height: 70px;
  width: auto;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

/* --- LINKS --- */
.navbar a {
  font-weight: bold;
  color: white;
  text-decoration: none; 
  transition: 0.3s;
}
.navbar a:hover {
  color: #f0e6f5;
}
nav a.router-link-exact-active {
  font-weight: bold;
  background-color: #8f78b1;
  padding: 10px;
  border-radius: 8px;
}

/* --- BOTÓN HAMBURGUESA --- */
.hamburger {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* --- RESPONSIVE --- */
@media (max-width: 450px) {
  .nav-container {
    justify-content: space-between;
  }
  .hamburger {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 80px; /* debajo del navbar */
    left: 0;
    right: 0;
    background: #d4a4f7;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    display: none; /* oculto por defecto */
  }

  .nav-menu.active {
    display: flex; /* aparece al presionar hamburguesa */
  }
}
</style>
