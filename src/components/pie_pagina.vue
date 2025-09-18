<template>
  <footer class="full-width-footer">
    <div class="footer-content-wrapper">
      <div class="sections-wrapper">
        <div class="video-links-section">
          <h2 class="section-title">Videos más vistos</h2>
          <ul class="link-list">
            <li>
              <a href="https://www.youtube.com/watch?v=gdZLi9oWNZg" 
                target="_blank" 
                class="link-style">
                Dynamite
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=XsX3ATc3FbA" 
                target="_blank" 
                class="link-style">
                Boy With Luv (feat. Halsey)
              </a>
            </li>
          </ul>
        </div>

        <div class="instagram-links-section">
          <h2 class="section-title">Instagram de BTS</h2>
          <ul class="link-list members-grid">
            <li>
              <a href="https://www.instagram.com/bts.bighitofficial/" 
                target="_blank" 
                class="link-style">
                Cuenta oficial de BTS
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rkive/" 
                target="_blank" 
                class="link-style">
                RM
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jin/" 
                target="_blank" 
                class="link-style">
                Jin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/agustd/" 
                target="_blank" 
                class="link-style">
                Suga
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/uarmyhope/" 
                target="_blank" 
                class="link-style">
                J-Hope
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/j.m/" 
                target="_blank" 
                class="link-style">
                Jimin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thv/" 
                target="_blank" 
                class="link-style">
                V
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jungkook.97/" 
                target="_blank" 
                class="link-style">
                Jungkook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p class="copyright-text">© 2025 Página dedicada a BTS 💜</p>
    </div>
  </footer>
</template>

<script setup>
// No se necesita lógica por ahora
</script>

<style scoped>
.full-width-footer {
  background-color: #d4a4f7;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.footer-content-wrapper {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.copyright-text {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #5b21b6;
}

.sections-wrapper {
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
}

.video-links-section, .instagram-links-section {
  flex: 1;
  min-width: 250px;
}

.section-title {
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #4c1d95;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 3px solid #a78bfa; /* subrayado moderno */
}

.link-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  list-style-type: none;
  padding-left: 0;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.5rem;
}

.link-style {
  color: #6d28d9;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-style:hover {
  background: #c4b5fd; 
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .sections-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>