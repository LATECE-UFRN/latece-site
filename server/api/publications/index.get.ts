import publicationsData from '../../data/publications.json'

export default defineEventHandler((event) => {
  return publicationsData.items || []
})