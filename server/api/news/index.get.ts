import { noticiasStore } from '../../utils/newsStore'

export default defineEventHandler((event) => {
  return noticiasStore
})