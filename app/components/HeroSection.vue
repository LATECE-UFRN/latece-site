<template>
  <div v-if="noticias && noticias.length > 0" class="hero-grid">
    <!-- Destaque Principal (Notícia 1) -->
    <article class="hero-main-card">
      <NuxtLink :to="`/noticias/${noticias[0].id}`" class="hero-main-link" aria-label="Ler notícia completa">
        <img 
          v-if="noticias[0].imageUrl" 
          :src="resolveImage(noticias[0].imageUrl)" 
          :alt="`Imagem da notícia: ${noticias[0].title}`" 
          class="hero-main-image"
          @error="(e) => e.target.style.display = 'none'"
        />
        <div class="hero-main-content">
          <span style="font-size: 0.8rem; font-weight: bold; color: #666; text-transform: uppercase;">
            {{ noticias[0].category }}
          </span>
          <h2 class="hero-main-title">{{ noticias[0].title }}</h2>
          <p style="color: #555;">{{ noticias[0].excerpt }}</p>
        </div>
      </NuxtLink>
    </article>

    <!-- Lista Lateral (Notícias 2, 3 e 4) -->
    <div class="hero-side-list">
      <article v-for="noticia in noticias.slice(1, 4)" :key="noticia.id" class="hero-side-card">
        <img 
          v-if="noticia.imageUrl" 
          :src="resolveImage(noticia.imageUrl)" 
          :alt="`Imagem da notícia: ${noticia.title}`" 
          class="hero-side-image"
          @error="(e) => e.target.style.display = 'none'"
        />
        <div class="hero-side-content">
          <NuxtLink :to="`/noticias/${noticia.id}`" style="text-decoration: none;">
            <h4>{{ noticia.title }}</h4>
          </NuxtLink>
          <span class="hero-side-date">{{ formatarData(noticia.createdAt) }}</span>
        </div>
      </article>
    </div>
  </div>
  <div v-else style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
    <p>Nenhuma notícia em destaque no momento.</p>
  </div>
</template>

<script setup>
const { resolveImage } = useImageUrl()

defineProps({
  noticias: {
    type: Array,
    default: () => []
  }
})

const formatarData = (dataString) => {
  if (!dataString) return ''
  const [ano, mes, dia] = dataString.split('-')
  return `${dia}/${mes}/${ano}`
}
</script>