import newsData from '../../data/news-fallback.json'
export default defineEventHandler((event) => {
  return newsData.items || []
})