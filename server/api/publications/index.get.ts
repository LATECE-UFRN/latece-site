import publicationsData from '../../data/publications.json'

export default defineEventHandler((event) => {
  // O JSON enviado possui uma estrutura { "version": "...", "items": [...] }
  return publicationsData.items || []
})