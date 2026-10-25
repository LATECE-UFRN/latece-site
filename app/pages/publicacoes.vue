<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Publicações e Pesquisas</h1>
      <p>Repositório virtual de artigos, materiais didáticos e trabalhos acadêmicos do LATECE.</p>
    </section>

    <!-- Filtro por Tipo -->
    <div style="margin-bottom: 2rem;">
      <label for="filtro-tipo" style="font-weight: bold; margin-right: 1rem;">Filtrar por tipo:</label>
      <select 
        id="filtro-tipo" 
        v-model="tipoSelecionado"
        style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 400px;"
      >
        <option value="">Todos os tipos</option>
        <option v-for="tipo in tipos" :key="tipo" :value="tipo">
          {{ tipo }}
        </option>
      </select>
    </div>

    <div v-if="pending" style="text-align: center;">Carregando publicações...</div>
    
    <div v-else-if="publicacoesFiltradas.length === 0" style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
      Nenhuma publicação encontrada para este tipo.
    </div>

    <div v-else class="card-grid">
      <article v-for="pub in publicacoesFiltradas" :key="pub.id" class="card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <span style="font-size: 0.75rem; background: #e6f0fa; color: #113272; padding: 2px 8px; border-radius: 4px;">
            {{ pub.type }}
          </span>
          <span style="font-size: 0.85rem; font-weight: bold; color: #666;">
            {{ pub.year }}
          </span>
        </div>

        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; line-height: 1.4;">{{ pub.title }}</h3>
        <p style="font-size: 0.9rem; color: #113272; font-weight: bold; margin-bottom: 0.5rem;">
          {{ pub.authors }}
        </p>
        <p style="flex-grow: 1; font-size: 0.95rem; margin-bottom: 1.5rem;">
          {{ pub.abstract }}
        </p>
        
        <a 
          v-if="pub.externalLink" 
          :href="pub.externalLink" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-primary" 
          style="align-self: flex-start; font-size: 0.9rem;"
        >
          Acessar Publicação <i class="fa-solid fa-external-link-alt" style="margin-left: 5px;"></i>
        </a>
        <span v-else style="font-size: 0.85rem; color: #888; font-style: italic;">
          Arquivo indisponível para download no momento.
        </span>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '#app'

// Mudança principal: Consumindo a API do Nitro
const { data: publicacoes, pending } = await useFetch('/api/publications')

const tipoSelecionado = ref('')

const tipos = computed(() => {
  if (!publicacoes.value) return []
  return [...new Set(publicacoes.value.map(p => p.type))].sort()
})

const publicacoesFiltradas = computed(() => {
  if (!publicacoes.value) return []
  if (!tipoSelecionado.value) return publicacoes.value
  return publicacoes.value.filter(p => p.type === tipoSelecionado.value)
})
</script>