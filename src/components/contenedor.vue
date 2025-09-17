<template>
  <div class="bts-container">
    <h1>💜 BTS (방탄소년단)</h1>
    <img
      class="bts-image"
      src="https://www.shutterstock.com/image-vector/bts-logo-bright-colors-division-600nw-2156401461.jpg"
      alt="BTS Logo"
    />
    <p class="bts-description">
       BTS es una boy band surcoreana formada por Big Hit Entertainment. El grupo debutó en 2013 y está compuesto por siete miembros: RM, Jin, Suga, J-Hope, Jimin, V y Jungkook. Son conocidos por sus letras significativas, coreografías impactantes y su amor por ARMY. 💜
    </p>
  </div>
</template>

<script setup>

</script>

<style>
.bts-container {
  background: linear-gradient(135deg, #d4a4f7, #fbd0f5);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.bts-container h1 {
  font-size: 2.5rem;
  color: #5a189a;
  margin-bottom: 1rem;
}

.bts-image {
  max-width: 200px;
  margin: 1rem auto;
  display: block;
}

.bts-description {
  font-size: 1.2rem;
  color: #3c096c;
}
</style>