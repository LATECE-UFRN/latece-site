<template>
  <div>
    <section class="hero-section">
      <h1>Bem-vindo ao LATECE</h1>
      <p>
        Laboratório de Tecnologia Assistiva do Centro de Educação da UFRN.
        Promovendo inclusão, pesquisa e inovação.
      </p>
    </section>

    <section>
      <h2>Nossa Missão</h2>
      <p style="margin-bottom: 2rem;">
        Desenvolver e disseminar soluções em Tecnologia Assistiva, atuando como um polo de pesquisa, 
        formação e inclusão na UFRN.
      </p>
      
      <NuxtLink to="/sobre" class="btn-primary">Saiba mais sobre o LATECE</NuxtLink>
    </section>

    <section style="margin-top: 4rem;">
      <h2>Últimas Notícias</h2>
      <p style="margin-bottom: 1rem;">Confira os destaques e novidades do nosso laboratório.</p>
      
      <div v-if="pending" aria-live="polite" style="text-align: center;">Carregando destaques...</div>
      
      <div v-else-if="!noticias || noticias.length === 0" style="text-align: center;">
        Nenhuma notícia publicada ainda.
      </div>

      <div v-else class="card-grid">
        <article v-for="noticia in noticias.slice(0, 3)" :key="noticia.id" class="card">
          <h3>{{ noticia.title }}</h3>
          <p>{{ noticia.excerpt }}</p>
          <NuxtLink 
            :to="`/noticias/${noticia.id}`" 
            class="btn-primary" 
            style="align-self: flex-start;"
            :aria-label="`Ler notícia completa: ${noticia.title}`"
          >
            Ler mais &rarr;
          </NuxtLink>
        </article>
      </div>
      
      <div style="text-align: center; margin-top: 3rem;">
        <NuxtLink to="/noticias" class="btn-primary">Ver Todas as Notícias</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const { data: noticias, pending } = await useFetch('/api/news')
</script>