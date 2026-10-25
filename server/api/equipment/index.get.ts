import equipmentData from '../../data/equipment.json'

export default defineEventHandler((event) => {
  // O JSON enviado possui uma estrutura { "version": "...", "items": [...] }
  return equipmentData.items || []
})