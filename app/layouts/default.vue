<template>
  <div>
    <!-- Skip Link (Acessibilidade) -->
    <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

    <!-- TOP BAR INSTITUCIONAL -->
    <div class="ufrn-top-bar">
      <div class="container">
        <div class="top-links">
          <a href="https://gov.br" target="_blank" rel="noopener noreferrer">Brasil</a>
        </div>
        <div class="top-links">
          <a href="#" @click.prevent>Simplifique!</a>
          <a href="#" @click.prevent>Comunica BR</a>
          <a href="#" @click.prevent>Participe</a>
          <a href="#" @click.prevent>Acesso à informação</a>
          <a href="#" @click.prevent>Legislação</a>
          <a href="#" @click.prevent>Canais</a>
        </div>
      </div>
    </div>

    <!-- HEADER INSTITUCIONAL -->
    <header class="ufrn-header">
      <div class="container header-content">
        <div class="logo-area">
          <NuxtLink to="/" style="color: white; text-decoration: none;">
            <i class="fa-solid fa-university" aria-hidden="true" style="font-size: 2rem;"></i>
            <span style="font-size: 1.5rem; font-weight: bold;">UFRN</span>
            <span class="latece-name">LATECE</span>
          </NuxtLink>
        </div>

        <!-- Botão Hambúrguer -->
        <button 
          class="menu-toggle" 
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-controls="main-nav"
          aria-label="Abrir menu de navegação"
        >
          <i :class="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" aria-hidden="true"></i>
        </button>

        <!-- Navegação -->
        <nav id="main-nav" :class="{ 'is-open': isMenuOpen }" @keydown.esc="closeMenu">
          <NuxtLink to="/" @click="closeMenu">Início</NuxtLink>
          <NuxtLink to="/sobre" @click="closeMenu">Sobre</NuxtLink>
          <NuxtLink to="/equipe" @click="closeMenu">Equipe</NuxtLink>
          <NuxtLink to="/equipamentos" @click="closeMenu">Equipamentos</NuxtLink>
          <NuxtLink to="/publicacoes" @click="closeMenu">Publicações</NuxtLink>
          <NuxtLink to="/noticias" @click="closeMenu">Notícias</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- CONTEÚDO DA PÁGINA -->
    <main id="main-content" class="main-content">
      <slot />
    </main>

    <!-- FOOTER INSTITUCIONAL -->
    <footer class="ufrn-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Coluna 1: Endereço -->
          <div class="footer-column">
            <h4>Universidade Federal do Rio Grande do Norte</h4>
            <p>Laboratório de Tecnologia Assistiva - LATECE</p>
            <p>Centro de Educação</p>
            <p>Campus Universitário Lagoa Nova</p>
            <p>CEP 59078-970 | Natal/RN - Brasil</p>
          </div>

          <!-- Coluna 2: Links Úteis -->
          <div class="footer-column">
            <h4>Links Rápidos</h4>
            <a href="https://ufrn.br" target="_blank" rel="noopener">Portal da UFRN</a>
            <a href="https://sigaa.ufrn.br" target="_blank" rel="noopener">SIGAA</a>
            <a href="https://sigrh.ufrn.br" target="_blank" rel="noopener">SIGRH</a>
            <a href="https://www.ouvidoria.ufrn.br/" target="_blank" rel="noopener">Ouvidoria</a>
          </div>

          <!-- Coluna 3: Contato e Redes -->
          <div class="footer-column">
            <h4>Contato</h4>
            <p><i class="fa-solid fa-envelope" aria-hidden="true"></i> latece@ufrn.br</p>
            <p><i class="fa-solid fa-phone" aria-hidden="true"></i> (84) 3342-2270</p>
            <div style="margin-top: 1rem;">
              <a href="https://www.instagram.com/latece.ufrn/" target="_blank" rel="noopener" style="display: inline-block; margin-right: 10px;">
                <i class="fa-brands fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/@lateceufrn" target="_blank" rel="noopener" style="display: inline-block;">
                <i class="fa-brands fa-youtube fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} UFRN - Universidade Federal do Rio Grande do Norte.</p>
          <p>Desenvolvido pela <a href="https://www.sti.ufrn.br/" target="_blank" rel="noopener">Superintendência de Tecnologia da Informação (STI)</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>