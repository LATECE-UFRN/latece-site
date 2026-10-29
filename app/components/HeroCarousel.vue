<template>
  <section 
    class="hero-carousel" 
    aria-roledescription="carousel" 
    aria-label="Destaques do LATECE"
    @mouseenter="pauseCarousel"
    @mouseleave="startCarousel"
    @focusin="pauseCarousel"
    @focusout="startCarousel"
  >
    <div class="carousel-inner">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="carousel-slide"
        :class="{ 'is-active': currentSlide === index }"
        :aria-hidden="currentSlide !== index"
        role="group"
        aria-roledescription="slide"
        :aria-label="`Slide ${index + 1} de ${slides.length}`"
      >
        <div class="slide-image-wrapper">
          <img :src="resolveImage(slide.image)" :alt="slide.alt" class="slide-image" @error="(e) => e.target.src = 'https://via.placeholder.com/1200x400/113272/FFFFFF?text=Imagem+Indisponivel'" />
        </div>
        <div class="slide-caption">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Controles -->
    <div class="carousel-controls">
      <button @click="prevSlide" class="control-btn" aria-label="Slide anterior">&#10094;</button>
      <button @click="togglePlay" class="control-btn" :aria-label="isPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'">
        <i :class="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'"></i>
      </button>
      <button @click="nextSlide" class="control-btn" aria-label="Próximo slide">&#10095;</button>
    </div>

    <!-- Indicadores -->
    <div class="carousel-indicators">
      <button 
        v-for="(slide, index) in slides" 
        :key="'ind-' + index"
        @click="goToSlide(index)"
        class="indicator-dot"
        :class="{ 'is-active': currentSlide === index }"
        :aria-label="`Ir para o slide ${index + 1}`"
        :aria-current="currentSlide === index ? 'true' : 'false'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { resolveImage } = useImageUrl()

// Dados dos 4 slides solicitados
const slides = ref([
  {
    title: 'Bem-vindo ao LATECE',
    description: 'Laboratório de Tecnologia Assistiva do Centro de Educação da UFRN. Promovendo inclusão, pesquisa e inovação.',
    image: '/images/hero/hero-1.jpg',
    alt: 'Estudantes utilizando recursos de tecnologia assistiva'
  },
  {
    title: 'Conheça a História por Trás da Logo do LATECE',
    description: 'Descubra o significado e o processo criativo que levou ao design único da nossa identidade visual.',
    image: '/images/hero/hero-2.jpg',
    alt: 'Detalhe da identidade visual do LATECE'
  },
  {
    title: 'Descubra o que é o LATECE',
    description: 'Um espaço de formação inicial e continuada, pesquisa e extensão. Conheça nossa estrutura, nossos projetos e os recursos de Tecnologia Assistiva que transformam a inclusão.',
    image: '/images/hero/hero-3.jpg',
    alt: 'Equipe do LATECE em atividade de formação'
  },
  {
    title: 'Tecnologia Assistiva na Prática',
    description: 'Conheça nossos equipamentos e recursos que auxiliam na inclusão e no desenvolvimento de pessoas com deficiência.',
    image: '/images/hero/hero-4.jpg',
    alt: 'Equipamentos de tecnologia assistiva disponíveis no laboratório'
  }
])

const currentSlide = ref(0)
const isPlaying = ref(true)
let slideInterval = null

const startCarousel = () => {
  if (slideInterval) clearInterval(slideInterval)
  if (isPlaying.value) {
    slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)
  }
}

const pauseCarousel = () => {
  if (slideInterval) clearInterval(slideInterval)
}

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startCarousel()
  } else {
    pauseCarousel()
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
  if (isPlaying.value) startCarousel()
}

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  pauseCarousel()
})
</script>