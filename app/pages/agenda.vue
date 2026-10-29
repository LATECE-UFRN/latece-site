<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Agenda de Eventos</h1>
      <p>Acompanhe a programação, cursos, reuniões e oficinas do LATECE.</p>
    </section>

    <!-- Estado de Carregamento -->
    <div v-if="pending" style="text-align: center; padding: 3rem;">
      <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
      <p>Carregando agenda...</p>
    </div>

    <!-- Lista de Eventos Paginada -->
    <div v-else>
      <div v-if="paginatedEvents.length === 0" style="text-align: center; padding: 3rem; background: #f9f9f9; border-radius: 8px;">
        <p>Nenhum evento encontrado.</p>
      </div>

      <div v-else class="agenda-full-list">
        <article v-for="evento in paginatedEvents" :key="evento.id" class="agenda-full-item">
          <!-- Bloco da Data -->
          <time :datetime="evento.date" class="agenda-date" aria-label="Data do evento">
            <span class="day">{{ extrairDia(evento.date) }}</span>
            <span class="month">{{ extrairMes(evento.date) }}</span>
            <span class="year" style="font-size: 0.7rem; color: #666;">{{ extrairAno(evento.date) }}</span>
          </time>

          <!-- Bloco do Conteúdo -->
          <div class="agenda-full-content">
            <h3 class="agenda-title" style="margin-bottom: 0.5rem;">{{ evento.title }}</h3>
            
            <div class="agenda-meta" style="margin-bottom: 0.5rem;">
              <span v-if="evento.time" class="meta-item">
                <i class="fa-regular fa-clock" aria-hidden="true"></i> {{ evento.time }} <span v-if="evento.endTime">- {{ evento.endTime }}</span>
              </span>
              <span v-if="evento.location" class="meta-item">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ evento.location }}
              </span>
            </div>

            <p class="agenda-desc">{{ evento.description }}</p>
            
            <a 
              v-if="evento.link" 
              :href="evento.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-outline" 
              style="display: inline-block; margin-top: 1rem; font-size: 0.85rem;"
            >
              Mais informações
            </a>
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

const { data: eventosData, pending } = await useFetch('/api/agenda')

const currentPage = ref(1)
const itemsPerPage = 10

// Ordena os eventos do mais recente para o mais antigo
const sortedEvents = computed(() => {
  if (!eventosData.value) return []
  // Cria uma cópia do array e ordena por data decrescente
  return [...eventosData.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalPages = computed(() => {
  return Math.ceil(sortedEvents.value.length / itemsPerPage)
})

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedEvents.value.slice(start, end)
})

// Funções auxiliares de formatação
const extrairDia = (dataString) => {
  if (!dataString) return '--'
  return dataString.split('-')[2]
}
const extrairMes = (dataString) => {
  if (!dataString) return '---'
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
  const mes = parseInt(dataString.split('-')[1])
  return meses[mes - 1] || '---'
}
const extrairAno = (dataString) => {
  if (!dataString) return ''
  return dataString.split('-')[0]
}
</script>