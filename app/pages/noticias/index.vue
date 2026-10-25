<template>
  <div>
    <section style="margin-bottom: 2rem;">
      <h1>Notícias e Eventos</h1>
      <p>Acompanhe as últimas novidades, eventos e conquistas do LATECE.</p>
    </section>

    <div v-if="pending" aria-live="polite" style="text-align: center; padding: 2rem;">
      Carregando notícias...
    </div>

    <div v-else-if="error" role="alert" style="text-align: center; color: red; padding: 2rem;">
      Erro ao carregar as notícias: {{ error.message }}
    </div>

    <div v-else-if="!noticias || noticias.length === 0" style="text-align: center; padding: 2rem;">
      Nenhuma notícia encontrada no momento.
    </div>

    <div v-else class="card-grid">
      <article v-for="noticia in noticias" :key="noticia.id" class="card">
        <img 
          v-if="noticia.imageUrl" 
          :src="noticia.imageUrl.replace('assets/images', '/images')" 
          :alt="`Imagem da notícia: ${noticia.title}`"
          style="width: 100%; height: 180px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;"
          @error="(e) => e.target.style.display = 'none'"
        />
        
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 0.8rem; background: #e6f0fa; color: #113272; padding: 2px 8px; border-radius: 4px;">
            {{ noticia.category }}
          </span>
          <span style="font-size: 0.8rem; color: #666; display: flex; align-items: center;">
            <i class="fa-regular fa-calendar" style="margin-right: 4px;" aria-hidden="true"></i>
            {{ formatarData(noticia.createdAt) }}
          </span>
        </div>

        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">{{ noticia.title }}</h3>
        <p style="flex-grow: 1;">{{ noticia.excerpt }}</p>
        
        <NuxtLink 
          :to="`/noticias/${noticia.id}`" 
          class="btn-primary" 
          style="align-self: flex-start; margin-top: 1rem;"
          :aria-label="`Ler notícia completa: ${noticia.title}`"
        >
          Ler notícia completa &rarr;
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const { data: noticias, pending, error } = await useFetch('/api/news')

const formatarData = (dataString) => {
  if (!dataString) return ''
  const [ano, mes, dia] = dataString.split('-')
  return `${dia}/${mes}/${ano}`
}
</script>