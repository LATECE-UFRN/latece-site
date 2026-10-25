<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <header style="margin-bottom: 2rem;">
      <NuxtLink to="/admin/noticias" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem; display: inline-block;">
        &larr; Voltar para a lista
      </NuxtLink>
      <h1>Cadastrar Nova Notícia</h1>
    </header>

    <form @submit.prevent="salvarNoticia" style="background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <div style="margin-bottom: 1.5rem;">
        <label for="titulo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Título *</label>
        <input type="text" id="titulo" v-model="form.title" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="categoria" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Categoria *</label>
        <select id="categoria" v-model="form.category" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="" disabled>Selecione...</option>
          <option value="Evento">Evento</option>
          <option value="Equipamentos">Equipamentos</option>
          <option value="Formação">Formação</option>
          <option value="Pesquisa">Pesquisa</option>
        </select>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="resumo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Resumo (Opcional)</label>
        <textarea id="resumo" v-model="form.excerpt" rows="2" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Um breve resumo para os cards da Home"></textarea>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="conteudo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Conteúdo Completo *</label>
        <textarea id="conteudo" v-model="form.content" required rows="6" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      </div>

      <div style="margin-bottom: 2rem;">
        <label for="imagem" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">URL da Imagem (Opcional)</label>
        <input type="text" id="imagem" v-model="form.imageUrl" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" placeholder="/images/news/minha-imagem.jpg" />
      </div>

      <button type="submit" class="btn-primary" style="width: 100%;" :disabled="isLoading">
        <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin"></i> Salvando...</span>
        <span v-else>Publicar Notícia</span>
      </button>
    </form>

    <div v-if="mensagemErro" style="margin-top: 1rem; padding: 1rem; border-radius: 4px; background: #f2dede; color: #a94442;">
      {{ mensagemErro }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
  middleware: 'auth'
})

const form = reactive({
  title: '',
  category: '',
  excerpt: '',
  content: '',
  imageUrl: ''
})

const isLoading = ref(false)
const mensagemErro = ref('')

const salvarNoticia = async () => {
  isLoading.value = true
  mensagemErro.value = ''

  try {
    await $fetch('/api/news', {
      method: 'POST',
      body: form
    })
    
    // Redireciona de volta para a lista após salvar
    await navigateTo('/admin/noticias')
  } catch (error) {
    mensagemErro.value = error.data?.statusMessage || 'Erro ao salvar a notícia.'
  } finally {
    isLoading.value = false
  }
}
</script>