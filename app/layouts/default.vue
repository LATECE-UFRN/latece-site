<template>
  <div>
    <!-- Skip Link (Acessibilidade) -->
    <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

    <!-- TOP BAR INSTITUCIONAL -->
    <div class="ufrn-top-bar" ref="topBarRef">
      <div class="container">
        <a href="https://gov.br" target="_blank" rel="noopener noreferrer" class="brasil-link">
          <svg class="br-flag-svg" viewBox="0 0 720 504" xmlns="http://www.w3.org/2000/svg">
            <rect width="720" height="504" fill="#009c3b"/>
            <polygon points="360,42 666,252 360,462 54,252" fill="#ffdf00"/>
            <circle cx="360" cy="252" r="126" fill="#002776"/>
            <path d="M 234 252 Q 300 210 360 252 T 486 252" stroke="#fff" stroke-width="20" fill="none"/>
          </svg>
          <span>Brasil</span>
        </a>

        <button class="top-menu-toggle" @click.stop="toggleTopMenu" aria-label="Abrir menu superior">
          <i class="fa-solid fa-bars"></i>
        </button>

        <div class="top-links" :class="{ 'is-open': isTopMenuOpen }" @click.stop>
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
    <header class="ufrn-header" ref="headerRef">
      <div class="container header-content">
        <NuxtLink to="/" class="logo-link">
          <img 
            :src="resolveImage('/images/logos/logo-ufrn-latece.png')" 
            alt="UFRN | LATECE" 
            class="main-logo" 
          />
        </NuxtLink>

        <div class="desktop-actions">
          <nav id="main-nav-desktop">
            <NuxtLink to="/">Início</NuxtLink>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
            <NuxtLink to="/equipe">Equipe</NuxtLink>
            <NuxtLink to="/equipamentos">Equipamentos</NuxtLink>
            <NuxtLink to="/publicacoes">Publicações</NuxtLink>
            <NuxtLink to="/noticias">Notícias</NuxtLink>
          </nav>

          <div class="header-tools">
            <div class="dropdown-wrapper" @click.stop>
              <button class="tool-btn" @click="toggleDropdown('theme')" aria-label="Alterar Tema">
                <i class="fa-solid fa-circle-half-stroke"></i>
              </button>
              <div class="dropdown-menu" :class="{ 'is-open': activeDropdown === 'theme' }">
                <div class="themes-grid">
                  <button class="theme-btn btn-default" :class="{ active: currentTheme === 'default' }" @click="setTheme('default')" title="Padrão"></button>
                  <button class="theme-btn btn-low-vision" :class="{ active: currentTheme === 'low-vision' }" @click="setTheme('low-vision')" title="Baixa Visão">A</button>
                  <button class="theme-btn btn-dark" :class="{ active: currentTheme === 'dark' }" @click="setTheme('dark')" title="Escuro">A</button>
                  <button class="theme-btn btn-high-contrast" :class="{ active: currentTheme === 'high-contrast' }" @click="setTheme('high-contrast')" title="Alto Contraste">A</button>
                  <button class="theme-btn btn-monochrome" :class="{ active: currentTheme === 'monochrome' }" @click="setTheme('monochrome')" title="Monocromático">A</button>
                </div>
              </div>
            </div>

            <div class="dropdown-wrapper" @click.stop>
              <button class="tool-btn" @click="toggleDropdown('lang')" aria-label="Alterar Idioma">
                <i class="fa-solid fa-globe"></i> <span class="lang-text">{{ currentLang.toUpperCase() }}</span>
              </button>
              <div class="dropdown-menu lang-menu" :class="{ 'is-open': activeDropdown === 'lang' }">
                <a href="#" @click.prevent="changeLanguage('pt')" :class="{ 'font-bold': currentLang === 'pt' }">🇧🇷 Português (PT)</a>
                <a href="#" @click.prevent="changeLanguage('en')" :class="{ 'font-bold': currentLang === 'en' }">🇺🇸 English (EN)</a>
                <a href="#" @click.prevent="changeLanguage('es')" :class="{ 'font-bold': currentLang === 'es' }">🇪🇸 Español (ES)</a>
              </div>
            </div>

            <div class="dropdown-wrapper" @click.stop>
              <button class="tool-btn" @click="toggleDropdown('search')" aria-label="Abrir pesquisa">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <div class="dropdown-menu search-menu" :class="{ 'is-open': activeDropdown === 'search' }">
                <input type="text" placeholder="Pesquisar no site..." aria-label="Pesquisar" ref="searchInputRef" />
              </div>
            </div>
          </div>
        </div>

        <button class="menu-toggle" @click="toggleMobileMenu" :aria-expanded="isMobileMenuOpen" aria-label="Abrir menu de navegação">
          <i :class="isMobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
        </button>

        <nav id="main-nav-mobile" :class="{ 'is-open': isMobileMenuOpen }" @click.stop>
          <NuxtLink to="/" @click="closeAllMenus">Início</NuxtLink>
          <NuxtLink to="/sobre" @click="closeAllMenus">Sobre</NuxtLink>
          <NuxtLink to="/equipe" @click="closeAllMenus">Equipe</NuxtLink>
          <NuxtLink to="/equipamentos" @click="closeAllMenus">Equipamentos</NuxtLink>
          <NuxtLink to="/publicacoes" @click="closeAllMenus">Publicações</NuxtLink>
          <NuxtLink to="/noticias" @click="closeAllMenus">Notícias</NuxtLink>

          <div class="mobile-tools">
            <div class="dropdown-wrapper" style="width: 100%; text-align: right;">
              <button class="tool-btn" @click="toggleDropdown('theme')" aria-label="Alterar Tema" style="margin-left: auto;">
                <i class="fa-solid fa-circle-half-stroke"></i> Temas
              </button>
              <div class="dropdown-menu" :class="{ 'is-open': activeDropdown === 'theme' }">
                <div class="themes-grid">
                  <button class="theme-btn btn-default" :class="{ active: currentTheme === 'default' }" @click="setTheme('default')"></button>
                  <button class="theme-btn btn-low-vision" :class="{ active: currentTheme === 'low-vision' }" @click="setTheme('low-vision')">A</button>
                  <button class="theme-btn btn-dark" :class="{ active: currentTheme === 'dark' }" @click="setTheme('dark')">A</button>
                  <button class="theme-btn btn-high-contrast" :class="{ active: currentTheme === 'high-contrast' }" @click="setTheme('high-contrast')">A</button>
                  <button class="theme-btn btn-monochrome" :class="{ active: currentTheme === 'monochrome' }" @click="setTheme('monochrome')">A</button>
                </div>
              </div>
            </div>

            <div class="dropdown-wrapper" style="width: 100%; text-align: right;">
              <button class="tool-btn" @click="toggleDropdown('lang')" aria-label="Alterar Idioma" style="margin-left: auto;">
                <i class="fa-solid fa-globe"></i> {{ currentLang.toUpperCase() }}
              </button>
              <div class="dropdown-menu lang-menu" :class="{ 'is-open': activeDropdown === 'lang' }">
                <a href="#" @click.prevent="changeLanguage('pt')">🇧🇷 Português (PT)</a>
                <a href="#" @click.prevent="changeLanguage('en')">🇺🇸 English (EN)</a>
                <a href="#" @click.prevent="changeLanguage('es')">🇪🇸 Español (ES)</a>
              </div>
            </div>

            <div class="dropdown-wrapper" style="width: 100%; text-align: right;">
              <button class="tool-btn" @click="toggleDropdown('search')" aria-label="Abrir pesquisa" style="margin-left: auto;">
                <i class="fa-solid fa-magnifying-glass"></i> Pesquisar
              </button>
              <div class="dropdown-menu search-menu" :class="{ 'is-open': activeDropdown === 'search' }">
                <input type="text" placeholder="Pesquisar no site..." aria-label="Pesquisar" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- CONTEÚDO DA PÁGINA -->
    <main id="main-content" class="main-content">
      <slot />
    </main>

    <!-- FOOTER INSTITUCIONAL -->
    <footer class="ufrn-footer">
      <!-- BOTÃO VOLTAR AO TOPO (Posicionado no topo do footer) -->
      <button @click="scrollToTop" class="back-to-top-btn" aria-label="Voltar ao topo da página">
        <i class="fa-solid fa-chevron-up"></i>
      </button>

      <div class="container">
        <div class="footer-grid">
          <!-- Coluna 1 -->
          <div class="footer-column">
            <img 
              :src="resolveImage('/images/logos/logo-ufrn-latece.png')" 
              alt="UFRN | LATECE" 
              class="footer-logo" 
            />
            <h4>Universidade Federal do Rio Grande do Norte</h4>
            <p>Laboratório de Tecnologia Assistiva - LATECE</p>
            <p>Centro de Educação</p>
            <p>Campus Universitário Lagoa Nova</p>
            <p>CEP 59078-970 | Natal/RN - Brasil</p>
          </div>
          
          <!-- Coluna 2 -->
          <div class="footer-column">
            <h4>Links Rápidos</h4>
            <a href="https://ufrn.br" target="_blank" rel="noopener">Portal da UFRN</a>
            <a href="https://sigaa.ufrn.br" target="_blank" rel="noopener">SIGAA</a>
            <a href="https://sigrh.ufrn.br" target="_blank" rel="noopener">SIGRH</a>
            <a href="https://www.ouvidoria.ufrn.br/" target="_blank" rel="noopener">Ouvidoria</a>
          </div>
          
          <!-- Coluna 3 -->
          <div class="footer-column">
            <h4>Contato</h4>
            <p><i class="fa-solid fa-envelope"></i> latece@ufrn.br</p>
            <p><i class="fa-solid fa-phone"></i> (84) 3342-2270</p>
            <div style="margin-top: 1rem;">
              <a href="https://www.instagram.com/latece.ufrn/" target="_blank" rel="noopener" style="display: inline-block; margin-right: 10px;">
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@lateceufrn" target="_blank" rel="noopener" style="display: inline-block;">
                <i class="fa-brands fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} UFRN - Universidade Federal do Rio Grande do Norte.</p>
          <p>Desenvolvido pelo LATECE</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const { resolveImage } = useImageUrl()

const isMobileMenuOpen = ref(false)
const isTopMenuOpen = ref(false)
const activeDropdown = ref(null) 

const headerRef = ref(null)
const topBarRef = ref(null)
const searchInputRef = ref(null)

const currentTheme = ref('default')
const currentLang = ref('pt')

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isTopMenuOpen.value = false
    activeDropdown.value = null
  }
}

const toggleTopMenu = () => {
  isTopMenuOpen.value = !isTopMenuOpen.value
  if (isTopMenuOpen.value) isMobileMenuOpen.value = false
}

const toggleDropdown = async (name) => {
  if (activeDropdown.value === name) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = name
    if (name === 'search') {
      await nextTick() 
      if (searchInputRef.value) searchInputRef.value.focus()
    }
  }
}

const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  isTopMenuOpen.value = false
  activeDropdown.value = null
}

const handleClickOutside = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    isMobileMenuOpen.value = false
    activeDropdown.value = null
  }
  if (topBarRef.value && !topBarRef.value.contains(event.target)) {
    isTopMenuOpen.value = false
  }
}

const setTheme = (themeName) => {
  currentTheme.value = themeName
  document.documentElement.classList.remove('high-contrast', 'dark', 'low-vision', 'monochrome')
  
  if (themeName === 'high-contrast') document.documentElement.classList.add('high-contrast')
  else if (themeName === 'dark') document.documentElement.setAttribute('data-theme', 'dark')
  else if (themeName === 'low-vision') document.documentElement.setAttribute('data-theme', 'low-vision')
  else if (themeName === 'monochrome') document.documentElement.classList.add('monochrome')
  else document.documentElement.removeAttribute('data-theme')
  
  localStorage.setItem('latece-theme', themeName)
  activeDropdown.value = null
}

const changeLanguage = (lang) => {
  currentLang.value = lang
  localStorage.setItem('latece-lang', lang)
  activeDropdown.value = null
}

onMounted(() => {
  const savedTheme = localStorage.getItem('latece-theme')
  if (savedTheme) setTheme(savedTheme)
  
  const savedLang = localStorage.getItem('latece-lang')
  if (savedLang) currentLang.value = savedLang

  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>