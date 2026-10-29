<template>
  <div v-if="eventos && eventos.length > 0" class="agenda-grid">
    <article v-for="evento in eventos" :key="evento.id" class="agenda-card">
      <div class="agenda-date-badge">
        <span class="day">{{ extrairDia(evento.date) }}</span>
        <span class="month">{{ extrairMes(evento.date) }}</span>
      </div>
      <div class="agenda-info">
        <h4>{{ evento.title }}</h4>
        <p><i class="fa-regular fa-clock" aria-hidden="true"></i> {{ evento.time }} - {{ evento.location }}</p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem;">{{ evento.description }}</p>
      </div>
    </article>
  </div>
  <div v-else style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
    <p>Nenhum evento agendado no momento.</p>
  </div>
</template>

<script setup>
defineProps({
  eventos: {
    type: Array,
    default: () => []
  }
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