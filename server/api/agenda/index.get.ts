import { agendaMock } from '../../utils/mockDb'

export default defineEventHandler((event) => {
  // Retorna a lista de eventos da agenda
  return agendaMock
})