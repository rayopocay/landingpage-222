<template>
  <div class="contenido">
    <div class="bts-container"> 
      <h1>💜 BTS (방탄소년단)</h1> 
      <img class="bts-image" src="https://www.shutterstock.com/image-vector/bts-logo-bright-colors-division-600nw-2156401461.jpg" alt="BTS Logo" /> 
      <p class="bts-description"> BTS es una boy band surcoreana formada por Big Hit Entertainment. 
        El grupo debutó en 2013 y está compuesto por siete miembros: RM, Jin, Suga, J-Hope, Jimin, V y Jungkook. 
        Son conocidos por sus letras significativas, coreografías impactantes y su amor por ARMY.</p>
    </div>
    <div class="carousel-container">
      <h3 class="carousel-title">✨ Conoce a los Miembros ✨</h3>

      <div class="carousel-wrapper">
        <button class="carousel-btn prev" @click="prevSlide">‹</button>

        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="carousel-slide" v-for="(member, index) in members" :key="index">
            <img class="member-image" :src="member.image" :alt="member.name" />
            <div class="member-name">{{ member.name }}</div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextSlide">›</button>
      </div>

      <div class="carousel-nav">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="nav-dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        />
      </div>

      <div class="member-counter">
        {{ currentSlide + 1 }} / {{ members.length }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const members = ref([
  {
    name: 'RM (김남준) - Líder & Rapper Principal',
    image: 'https://consequence.net/wp-content/uploads/2024/04/rm-rpwp-announcement.jpeg?quality=80'
  },
  {
    name: 'Jin (김석진) - Vocalista & Visual',
    image: 'https://revistakoreain.com.br/wp-content/uploads/2022/10/Jin-BTS-capa-1.jpg'
  },
  {
    name: 'Suga (민윤기) - Rapper & Productor',
    image: 'https://www.musicmundial.com/wp-content/uploads/2023/12/Estos-son-algunos-nuevos-detalles-que-puedes-saber-de-Suga-de-BTS.jpg'
  },
  {
    name: 'J-Hope (정호석) - Rapper & Bailarín Principal',
    image: 'https://rare-gallery.com/thumbs/340358-BTS-Bangtang-Boys-K-Pop-Korean-Boy-Group-Kpop-BE-J-Hope.jpg'
  },
  {
    name: 'Jimin (박지민) - Vocalista & Bailarín Principal',
    image: 'https://i.pinimg.com/originals/fd/90/cb/fd90cb536ee1fee2167bd62e1bc35e7c.jpg'
  },
  {
    name: 'V (김태형) - Vocalista & Visual',
    image: 'https://www.actitudfem.com/800x600/filters:format(jpg):quality(75)/media/files/images/2021/02/quien-es-v-taehyung-bts-prin.jpg'
  },
  {
    name: 'Jungkook (전정국) - Vocalista Principal & Maknae',
    image: 'https://www.musicmundial.com/wp-content/uploads/2022/05/BTS-Jungkook-debuta-en-Disney-con-una-nueva-serie-que-ya-es-1536x1024.jpg'
  }
])

const currentSlide = ref(0)
let autoplayInterval = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % members.value.length
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + members.value.length) % members.value.length
}

function goToSlide(index) {
  currentSlide.value = index
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

function stopAutoplay() {
  clearInterval(autoplayInterval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
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
    margin-bottom: 2rem;
}

/* Estilos del carrusel */
.carousel-container {
    position: relative;
    max-width: 500px;
    margin: 2rem auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
}

.carousel-title {
    font-size: 1.5rem;
    color: #5a189a;
    margin-bottom: 1rem;
    font-weight: bold;
    text-align: center;
}

.carousel-wrapper {
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-slide {
    min-width: 100%;
    position: relative;
}

.member-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
}

.member-name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 2rem 1rem 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
}

.nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(90, 24, 154, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.nav-dot.active {
    background: #5a189a;
    transform: scale(1.2);
    border-color: white;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(90, 24, 154, 0.8);
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
}

.carousel-btn:hover {
    background: rgba(90, 24, 154, 1);
    transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
    left: 10px;
}

.carousel-btn.next {
    right: 10px;
}

.member-counter {
  color: #5a189a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: bold;
  text-align: center;
}
</style>