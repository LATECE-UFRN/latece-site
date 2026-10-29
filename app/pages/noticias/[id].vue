<template>
  <div>
    <div v-if="pending" aria-live="polite" style="text-align: center; padding: 3rem;">
      Carregando notícia...
    </div>
    
    <div v-else-if="error || !noticia" role="alert" style="text-align: center; padding: 3rem;">
      <h2>Notícia não encontrada</h2>
      <p>A notícia que você está procurando não existe ou foi removida.</p>
      <NuxtLink to="/noticias" class="btn-primary" style="margin-top: 1rem;">Voltar para Notícias</NuxtLink>
    </div>

    <article v-else>
      <div style="margin-bottom: 2rem;">
        <NuxtLink to="/noticias" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem; display: inline-block;">
          &larr; Voltar para todas as notícias
        </NuxtLink>
        
        <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2;">{{ noticia.title }}</h1>
        
        <div style="display: flex; gap: 1rem; color: #666; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem;">
          <span><i class="fa-solid fa-tag" aria-hidden="true"></i> {{ noticia.category }}</span>
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ formatarData(noticia.createdAt) }}</span>
        </div>
      </div>

      <img 
        v-if="noticia.imageUrl" 
        :src="resolveImage(noticia.imageUrl)" 
        :alt="`Imagem da notícia: ${noticia.title}`"
        style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 2rem;"
        @error="(e) => e.target.style.display = 'none'"
      />

      <div class="page-content" v-html="conteudoSanitizado"></div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch, useHead } from '#app'
import DOMPurify from 'isomorphic-dompurify'

const { resolveImage } = useImageUrl()
const route = useRoute()
const idNoticia = route.params.id

const { data: noticia, pending, error } = await useFetch(`/api/news/${idNoticia}`)

useHead(() => ({
  title: noticia.value ? `${noticia.value.title} | LATECE` : 'Notícia não encontrada | LATECE'
}))

const conteudoSanitizado = computed(() => {
  if (!noticia.value || !noticia.value.content) return ''
  return DOMPurify.sanitize(noticia.value.content)
})

const formatarData = (dataString) => {
  if (!dataString) return ''
  const [ano, mes, dia] = dataString.split('-')
  return `${dia}/${mes}/${ano}`
}
</script>