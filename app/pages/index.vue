<template>
  <div>
    <!-- Componente do Carrossel de Destaques -->
    <HeroCarousel class="mb-4" />

    <!-- Destaques e Notícias -->
    <section style="margin-bottom: 4rem;">
      <h2 class="section-title">Últimas Notícias</h2>
      
      <div v-if="pendingNoticias" style="text-align: center; padding: 2rem;">
        <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
        <p>Carregando notícias...</p>
      </div>
      <HeroSection v-else :noticias="noticias" />

      <div style="text-align: right; margin-top: 1.5rem;">
        <NuxtLink to="/noticias" class="btn-primary">Ver Todas as Notícias</NuxtLink>
      </div>
    </section>

    <!-- Seção de Eventos (Agenda) -->
    <section style="margin-bottom: 4rem;">
      <div class="section-header-row">
        <h2 class="section-title">Eventos</h2>
        <NuxtLink to="/agenda" class="link-ver-todos">
          | Ver todos <i class="fa-solid fa-chevron-right" style="font-size: 0.7em; margin-left: 4px;"></i>
        </NuxtLink>
      </div>
      
      <div v-if="pendingAgenda" style="text-align: center; padding: 2rem;">
        <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
        <p>Carregando agenda...</p>
      </div>
      <AgendaSection v-else :eventos="eventos" />
    </section>

    <!-- Missão -->
    <section style="background: #f9f9f9; padding: 2rem; border-radius: 8px;">
      <h2 style="color: #113272; margin-bottom: 1rem;">Nossa Missão</h2>
      <p style="font-size: 1.1rem; line-height: 1.8;">
        Desenvolver e disseminar soluções em Tecnologia Assistiva, atuando como um polo de pesquisa, formação e inclusão na UFRN.
      </p>
      <NuxtLink to="/sobre" class="btn-primary" style="margin-top: 1rem;">Saiba mais sobre o LATECE</NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
import { computed } from 'vue'

// Busca de Notícias
const { data: dataNoticias, pending: pendingNoticias } = await useFetch('/api/news')

// Busca de Agenda
const { data: dataAgenda, pending: pendingAgenda } = await useFetch('/api/agenda')

// Garantindo que os dados sejam arrays
const noticias = computed(() => dataNoticias.value || [])
const eventos = computed(() => dataAgenda.value || [])
</script>

<style scoped>
.mb-4 {
  margin-bottom: 3rem;
}
</style>