import agendaData from '../../data/agenda.json'

export default defineEventHandler(() => {
  // Verifica se o JSON é um array direto ou um objeto com a chave 'events'
  const eventos = Array.isArray(agendaData) ? agendaData : agendaData.events || []
  return eventos
})