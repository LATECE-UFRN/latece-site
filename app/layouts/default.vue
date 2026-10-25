<template>
  <div>
    <!-- Skip Link (Acessibilidade) -->
    <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

    <!-- HEADER PROVISÓRIO -->
    <header class="ufrn-header">
      <div class="logo-area">
        <NuxtLink to="/" style="color: white; text-decoration: none;">
          <i class="fa-solid fa-university" aria-hidden="true"></i> UFRN | LATECE
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
      <nav 
        id="main-nav" 
        :class="{ 'is-open': isMenuOpen }"
        @keydown.esc="closeMenu"
      >
        <NuxtLink to="/" @click="closeMenu">Início</NuxtLink>
        <NuxtLink to="/sobre" @click="closeMenu">Sobre</NuxtLink>
        <NuxtLink to="/equipe" @click="closeMenu">Equipe</NuxtLink>
        <NuxtLink to="/equipamentos" @click="closeMenu">Equipamentos</NuxtLink>
        <NuxtLink to="/publicacoes" @click="closeMenu">Publicações</NuxtLink>
        <NuxtLink to="/noticias" @click="closeMenu">Notícias</NuxtLink>
        <NuxtLink to="/sugestoes" @click="closeMenu">Sugestões</NuxtLink>
      </nav>
    </header>

    <!-- CONTEÚDO DA PÁGINA -->
    <main id="main-content" class="main-content">
      <slot />
    </main>

    <!-- FOOTER PROVISÓRIO -->
    <footer class="ufrn-footer">
      <p>Universidade Federal do Rio Grande do Norte - UFRN</p>
      <p>Laboratório de Tecnologia Assistiva - LATECE</p>
      <p>&copy; {{ new Date().getFullYear() }} - Todos os direitos reservados</p>
      <p style="margin-top: 10px; font-size: 0.8rem; opacity: 0.8;">
        (Estrutura provisória baseada nas diretrizes da STI/UFRN)
      </p>
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

// Fecha o menu se o usuário apertar Escape globalmente
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