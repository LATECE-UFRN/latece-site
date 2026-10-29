<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Notícias e Eventos</h1>
      <p>Acompanhe as últimas novidades, eventos e conquistas do LATECE.</p>
    </section>

    <!-- Filtros Fixos (Sticky) -->
    <div class="sticky-filters">
      <div class="filter-group">
        <label for="search-news" class="sr-only">Buscar notícias</label>
        <input 
          type="text" 
          id="search-news" 
          v-model="searchQuery" 
          placeholder="Buscar por título..." 
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="category-filter" class="sr-only">Filtrar por categoria</label>
        <select id="category-filter" v-model="selectedCategory" class="filter-select">
          <option value="">Todas as categorias</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <!-- Estado de Carregamento -->
    <div v-if="pending" aria-live="polite" style="text-align: center; padding: 3rem;">
      <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
      <p>Carregando notícias...</p>
    </div>

    <!-- Lista de Notícias Paginada -->
    <div v-else>
      <div v-if="paginatedNews.length === 0" style="text-align: center; padding: 3rem; background: #f9f9f9; border-radius: 8px;">
        <p>Nenhuma notícia encontrada com os filtros selecionados.</p>
      </div>

      <div v-else class="card-grid">
        <article v-for="noticia in paginatedNews" :key="noticia.id" class="card">
          <img 
            v-if="noticia.imageUrl" 
            :src="resolveImage(noticia.imageUrl)" 
            :alt="`Imagem da notícia: ${noticia.title}`"
            style="width: 100%; height: 180px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;"
            @error="(e) => e.target.style.display = 'none'"
          />
          
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-size: 0.8rem; background: #e6f0fa; color: #113272; padding: 2px 8px; border-radius: 4px;">
              {{ noticia.category }}
            </span>
            <span style="font-size: 0.8rem; color: #666; display: flex; align-items: center;">
              <i class="fa-regular fa-calendar" style="margin-right: 4px;" aria-hidden="true"></i>
              {{ formatarData(noticia.createdAt) }}
            </span>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">{{ noticia.title }}</h3>
          <p style="flex-grow: 1;">{{ noticia.excerpt }}</p>
          
          <NuxtLink 
            :to="`/noticias/${noticia.id}`" 
            class="btn-primary" 
            style="align-self: flex-start; margin-top: 1rem;"
            :aria-label="`Ler notícia completa: ${noticia.title}`"
          >
            Ler notícia completa &rarr;
          </NuxtLink>
        </article>
      </div>

      <!-- Componente de Paginação -->
      <Pagination 
        v-model:currentPage="currentPage" 
        :totalPages="totalPages" 
      />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
import { ref, computed, watch } from 'vue'

// Chamada do composable de imagens
const { resolveImage } = useImageUrl()

const { data: noticias, pending } = await useFetch('/api/news')

const searchQuery = ref('')
const selectedCategory = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const categorias = computed(() => {
  if (!noticias.value) return []
  return [...new Set(noticias.value.map(n => n.category))].sort()
})

const filteredNews = computed(() => {
  if (!noticias.value) return []
  
  return noticias.value.filter(noticia => {
    const matchSearch = noticia.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCategory = selectedCategory.value ? noticia.category === selectedCategory.value : true
    return matchSearch && matchCategory
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / itemsPerPage)
})

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredNews.value.slice(start, end)
})

watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})

const formatarData = (dataString) => {
  if (!dataString) return ''
  const [ano, mes, dia] = dataString.split('-')
  return `${dia}/${mes}/${ano}`
}
</script>