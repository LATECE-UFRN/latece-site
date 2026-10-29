<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Publicações e Pesquisas</h1>
      <p>Repositório virtual de artigos, materiais didáticos e trabalhos acadêmicos do LATECE.</p>
    </section>

    <!-- Filtros Fixos (Sticky) -->
    <div class="sticky-filters">
      <div class="filter-group">
        <label for="search-pub" class="sr-only">Buscar publicações</label>
        <input 
          type="text" 
          id="search-pub" 
          v-model="searchQuery" 
          placeholder="Buscar por título ou autor..." 
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="filtro-tipo" class="sr-only">Filtrar por tipo</label>
        <select id="filtro-tipo" v-model="tipoSelecionado" class="filter-select">
          <option value="">Todos os tipos</option>
          <option v-for="tipo in tipos" :key="tipo" :value="tipo">{{ tipo }}</option>
        </select>
      </div>
    </div>

    <div v-if="pending" style="text-align: center; padding: 3rem;">
      <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
      <p>Carregando publicações...</p>
    </div>

    <div v-else>
      <div v-if="publicacoesFiltradas.length === 0" style="text-align: center; padding: 3rem; background: #f9f9f9; border-radius: 8px;">
        <p>Nenhuma publicação encontrada com os filtros selecionados.</p>
      </div>

      <!-- LISTA HORIZONTAL DE PUBLICAÇÕES -->
      <div v-else class="pub-list">
        <article v-for="pub in publicacoesPaginadas" :key="pub.id" class="pub-item">
          
          <div class="pub-header">
            <h3 class="pub-title">{{ pub.title }}</h3>
            <span class="pub-badge">{{ pub.type }}</span>
          </div>
          
          <p class="pub-authors">{{ pub.authors }}</p>
          <div class="pub-meta">{{ pub.year }} | Publicado</div>
          
          <p class="pub-abstract">{{ pub.abstract }}</p>
          
          <div class="pub-actions">
            <!-- Botão Ver Detalhes (Placeholder para modal futuro) -->
            <button class="btn-outline" @click="alert('Detalhes em breve')">Ver Detalhes</button>
            <!-- Botão Acessar (Link externo) -->
            <a v-if="pub.externalLink" :href="pub.externalLink" target="_blank" rel="noopener noreferrer" class="btn-outline">Acessar</a>
          </div>

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

const { data: publicacoes, pending } = await useFetch('/api/publications')

const searchQuery = ref('')
const tipoSelecionado = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const tipos = computed(() => {
  if (!publicacoes.value) return []
  return [...new Set(publicacoes.value.map(p => p.type))].sort()
})

const publicacoesFiltradas = computed(() => {
  if (!publicacoes.value) return []
  
  return publicacoes.value.filter(pub => {
    const matchSearch = pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        pub.authors.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchType = tipoSelecionado.value ? pub.type === tipoSelecionado.value : true
    return matchSearch && matchType
  })
})

const totalPages = computed(() => {
  return Math.ceil(publicacoesFiltradas.value.length / itemsPerPage)
})

const publicacoesPaginadas = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return publicacoesFiltradas.value.slice(start, end)
})

watch([searchQuery, tipoSelecionado], () => {
  currentPage.value = 1
})
</script>