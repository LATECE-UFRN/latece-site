<template>
  <div v-if="eventosFuturos.length > 0" class="agenda-wrapper">
    <!-- Exibe até 4 eventos futuros na Home -->
    <article 
      v-for="evento in eventosFuturos.slice(0, 4)" 
      :key="evento.id" 
      class="agenda-item"
      :class="{ 'is-expanded': expandedEventId === evento.id }"
    >
      <!-- Bloco da Data -->
      <time :datetime="evento.date" class="agenda-date" aria-label="Data do evento">
        <span class="day">{{ extrairDia(evento.date) }}</span>
        <span class="month">{{ extrairMes(evento.date) }}</span>
      </time>

      <!-- Bloco do Conteúdo -->
      <div class="agenda-content">
        <!-- Botão para Acessibilidade e Interatividade -->
        <button 
          class="agenda-title-btn" 
          @click="toggleEvent(evento.id)"
          :aria-expanded="expandedEventId === evento.id"
        >
          <h3 class="agenda-title">{{ evento.title }}</h3>
        </button>

        <!-- Detalhes Expandidos -->
        <div v-if="expandedEventId === evento.id" class="agenda-details" aria-live="polite">
          <p class="agenda-time" v-if="evento.time">
            <i class="fa-regular fa-clock" aria-hidden="true"></i> 
            {{ evento.time }} <span v-if="evento.endTime">às {{ evento.endTime }}</span>
          </p>
          <p class="agenda-desc">{{ evento.description }}</p>
          <p class="agenda-location" v-if="evento.location">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ evento.location }}
          </p>
          <a 
            v-if="evento.link" 
            :href="evento.link" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-primary" 
            style="display: inline-block; margin-top: 1rem; padding: 8px 16px; font-size: 0.9rem;"
          >
            Mais informações
          </a>
        </div>
      </div>
    </article>
  </div>
  <div v-else style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
    <p>Nenhum evento futuro agendado no momento.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  eventos: {
    type: Array,
    default: () => []
  }
})

const expandedEventId = ref(null)

const toggleEvent = (id) => {
  if (expandedEventId.value === id) {
    expandedEventId.value = null 
  } else {
    expandedEventId.value = id 
  }
}

// Lógica para filtrar e ordenar eventos futuros
const eventosFuturos = computed(() => {
  if (!props.eventos || props.eventos.length === 0) return []

  // Obtém a data atual no fuso horário local (formato YYYY-MM-DD)
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')
  const dataHojeLocal = `${ano}-${mes}-${dia}`

  return props.eventos
    // Filtra apenas eventos de hoje em diante
    .filter(evento => evento.date >= dataHojeLocal)
    // Ordena do mais próximo para o mais distante
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

const extrairDia = (dataString) => {
  if (!dataString) return '--'
  const [ano, mes, dia] = dataString.split('-')
  return dia
}

const extrairMes = (dataString) => {
  if (!dataString) return '---'
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
  const [ano, mes, dia] = dataString.split('-')
  return meses[parseInt(mes) - 1] || '---'
}
</script>