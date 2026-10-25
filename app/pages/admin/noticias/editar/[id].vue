<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <header style="margin-bottom: 2rem;">
      <NuxtLink to="/admin/noticias" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem; display: inline-block;">
        &larr; Voltar para a lista
      </NuxtLink>
      <h1>Editar Notícia</h1>
    </header>

    <div v-if="pending" style="text-align: center;">Carregando dados da notícia...</div>
    
    <div v-else-if="error" style="text-align: center; color: red;">
      Erro ao carregar notícia: {{ error.message }}
    </div>

    <form v-else @submit.prevent="atualizarNoticia" style="background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <div style="margin-bottom: 1.5rem;">
        <label for="titulo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Título *</label>
        <input type="text" id="titulo" v-model="form.title" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="categoria" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Categoria *</label>
        <select id="categoria" v-model="form.category" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="Evento">Evento</option>
          <option value="Equipamentos">Equipamentos</option>
          <option value="Formação">Formação</option>
          <option value="Pesquisa">Pesquisa</option>
          <option value="Notícia">Notícia</option>
        </select>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="resumo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Resumo (Opcional)</label>
        <textarea id="resumo" v-model="form.excerpt" rows="2" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="conteudo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Conteúdo Completo (Aceita HTML) *</label>
        <textarea id="conteudo" v-model="form.content" required rows="8" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      </div>

      <div style="margin-bottom: 2rem;">
        <label for="imagem" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">URL da Imagem (Opcional)</label>
        <input type="text" id="imagem" v-model="form.imageUrl" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <button type="submit" class="btn-primary" style="width: 100%;" :disabled="isSaving">
        <span v-if="isSaving"><i class="fa-solid fa-spinner fa-spin"></i> Salvando...</span>
        <span v-else>Salvar Alterações</span>
      </button>
    </form>

    <div v-if="mensagemErro" style="margin-top: 1rem; padding: 1rem; border-radius: 4px; background: #f2dede; color: #a94442;">
      {{ mensagemErro }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const id = route.params.id

const form = reactive({
  title: '',
  category: '',
  excerpt: '',
  content: '',
  imageUrl: ''
})

const isSaving = ref(false)
const mensagemErro = ref('')

// Busca a notícia específica para preencher o formulário
const { data: noticia, pending, error } = await useFetch(`/api/news/${id}`)

// Quando os dados chegam, preenchemos o formulário
if (noticia.value) {
  form.title = noticia.value.title
  form.category = noticia.value.category
  form.excerpt = noticia.value.excerpt
  form.content = noticia.value.content
  form.imageUrl = noticia.value.imageUrl
}

const atualizarNoticia = async () => {
  isSaving.value = true
  mensagemErro.value = ''

  try {
    await $fetch(`/api/news/${id}`, {
      method: 'PUT',
      body: form
    })
    
    await navigateTo('/admin/noticias')
  } catch (err) {
    mensagemErro.value = err.data?.statusMessage || 'Erro ao atualizar a notícia.'
  } finally {
    isSaving.value = false
  }
}
</script>