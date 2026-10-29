<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Equipamentos e Recursos</h1>
      <p>Catálogo de Tecnologia Assistiva disponível no laboratório.</p>
    </section>

    <!-- Filtros Fixos (Sticky) -->
    <div class="sticky-filters">
      <div class="filter-group">
        <label for="search-equip" class="sr-only">Buscar equipamentos</label>
        <input 
          type="text" 
          id="search-equip" 
          v-model="searchQuery" 
          placeholder="Buscar por nome ou descrição..." 
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="filtro-categoria" class="sr-only">Filtrar por categoria</label>
        <select id="filtro-categoria" v-model="categoriaSelecionada" class="filter-select">
          <option value="">Todas as categorias</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <!-- Estado de Carregamento -->
    <div v-if="pending" style="text-align: center; padding: 3rem;">
      <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
      <p>Carregando equipamentos...</p>
    </div>

    <!-- Lista de Equipamentos Paginada -->
    <div v-else>
      <div v-if="equipamentosFiltrados.length === 0" style="text-align: center; padding: 3rem; background: #f9f9f9; border-radius: 8px;">
        <p>Nenhum equipamento encontrado com os filtros selecionados.</p>
      </div>

      <div v-else class="card-grid">
        <article v-for="equip in equipamentosPaginados" :key="equip.id" class="card">
          <!-- Área da Imagem com Fallback Acessível -->
          <div style="width: 100%; height: 200px; background: #f0f0f0; border-radius: 4px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <img 
              v-if="equip.imageUrl" 
              :src="equip.imageUrl.replace('assets/images', '/images')" 
              :alt="`Imagem ilustrativa do equipamento: ${equip.name}`"
              style="width: 100%; height: 100%; object-fit: contain;"
              @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }"
            />
            <!-- Fallback acessível -->
            <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;" role="img" :aria-label="`Imagem não disponível para ${equip.name}`">
              <i class="fa-solid fa-microscope" style="font-size: 3rem; color: #ccc;"></i>
            </div>
          </div>
          
          <span style="font-size: 0.75rem; background: #e6f0fa; color: #113272; padding: 2px 8px; border-radius: 4px; align-self: flex-start; margin-bottom: 0.5rem;">
            {{ equip.category }}
          </span>
          <h3>{{ equip.name }}</h3>
          <p style="flex-grow: 1;">{{ equip.description }}</p>
          
          <a v-if="equip.downloadUrl" :href="equip.downloadUrl" class="btn-primary" style="align-self: flex-start; margin-top: 1rem;" download>
            <i class="fa-solid fa-download" aria-hidden="true"></i> Baixar Recurso
          </a>
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

const { data: equipamentos, pending } = await useFetch('/api/equipment')

// Estados dos Filtros
const searchQuery = ref('')
const categoriaSelecionada = ref('')
const currentPage = ref(1)
const itemsPerPage = 9

// Extrai categorias únicas
const categorias = computed(() => {
  if (!equipamentos.value) return []
  return [...new Set(equipamentos.value.map(e => e.category))].sort()
})

// Lógica de Filtragem
const equipamentosFiltrados = computed(() => {
  if (!equipamentos.value) return []
  
  return equipamentos.value.filter(equip => {
    const matchSearch = equip.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        equip.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCategory = categoriaSelecionada.value ? equip.category === categoriaSelecionada.value : true
    return matchSearch && matchCategory
  })
})

// Lógica de Paginação
const totalPages = computed(() => {
  return Math.ceil(equipamentosFiltrados.value.length / itemsPerPage)
})

const equipamentosPaginados = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return equipamentosFiltrados.value.slice(start, end)
})

// Reseta a página para 1 quando os filtros mudam
watch([searchQuery, categoriaSelecionada], () => {
  currentPage.value = 1
})
</script>