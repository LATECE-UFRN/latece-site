<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Equipamentos e Recursos</h1>
      <p>Catálogo de Tecnologia Assistiva disponível no laboratório.</p>
    </section>

    <div style="margin-bottom: 2rem;">
      <label for="filtro-categoria" style="font-weight: bold; margin-right: 1rem;">Filtrar por categoria:</label>
      <select 
        id="filtro-categoria" 
        v-model="categoriaSelecionada"
        style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 400px;"
      >
        <option value="">Todas as categorias</option>
        <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div v-if="pending" aria-live="polite" style="text-align: center;">Carregando equipamentos...</div>
    <div v-else-if="equipamentosFiltrados.length === 0" aria-live="polite" style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
      Nenhum equipamento encontrado nesta categoria.
    </div>

    <div v-else class="card-grid">
      <article v-for="equip in equipamentosFiltrados" :key="equip.id" class="card">
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
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '#app'

const { data: equipamentos, pending } = await useFetch('/api/equipment')
const categoriaSelecionada = ref('')

const categorias = computed(() => {
  if (!equipamentos.value) return []
  return [...new Set(equipamentos.value.map(e => e.category))].sort()
})

const equipamentosFiltrados = computed(() => {
  if (!equipamentos.value) return []
  if (!categoriaSelecionada.value) return equipamentos.value
  return equipamentos.value.filter(e => e.category === categoriaSelecionada.value)
})
</script>