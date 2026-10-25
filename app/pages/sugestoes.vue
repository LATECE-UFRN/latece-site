<template>
  <div>
    <section style="margin-bottom: 3rem; text-align: center;">
      <h1>Envie sua Sugestão</h1>
      <p>Ajude-nos a melhorar o LATECE. Sua ideia ou feedback é muito importante para nós.</p>
    </section>

    <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <form @submit.prevent="enviarSugestao" novalidate>
        
        <div style="margin-bottom: 1.5rem;">
          <label for="nome" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Nome (Opcional)</label>
          <input type="text" id="nome" v-model="form.nome" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Seu nome" />
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">E-mail (Opcional)</label>
          <input type="email" id="email" v-model="form.email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" placeholder="seu@email.com" />
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label for="tipo" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Tipo de Sugestão <span aria-hidden="true">*</span></label>
          <select 
            id="tipo" 
            v-model="form.tipo" 
            required 
            aria-required="true"
            :aria-invalid="!!mensagemErro && !form.tipo"
            aria-describedby="status-sugestao"
            style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="melhoria">Melhoria no Site</option>
            <option value="acessibilidade">Acessibilidade</option>
            <option value="equipamento">Novo Equipamento</option>
            <option value="projeto">Ideia de Projeto/Pesquisa</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label for="mensagem" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Sua Mensagem <span aria-hidden="true">*</span></label>
          <textarea 
            id="mensagem" 
            v-model="form.mensagem" 
            required 
            aria-required="true"
            :aria-invalid="!!mensagemErro && !form.mensagem"
            aria-describedby="status-sugestao"
            rows="5" 
            style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" 
            placeholder="Descreva sua sugestão detalhadamente..."
          ></textarea>
        </div>

        <button type="submit" class="btn-primary" style="width: 100%; font-size: 1.1rem;" :disabled="isLoading">
          <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Enviando...</span>
          <span v-else>Enviar Sugestão</span>
        </button>
      </form>

      <div 
        v-if="mensagemStatus" 
        id="status-sugestao"
        :role="sucesso ? 'status' : 'alert'"
        aria-live="polite"
        :class="['alert', sucesso ? 'alert-success' : 'alert-error']" 
        style="margin-top: 1.5rem; padding: 1rem; border-radius: 4px; text-align: center;"
      >
        {{ mensagemStatus }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  nome: '',
  email: '',
  tipo: '',
  mensagem: ''
})

const isLoading = ref(false)
const mensagemStatus = ref('')
const sucesso = ref(false)
const mensagemErro = ref('')

const enviarSugestao = async () => {
  isLoading.value = true
  mensagemStatus.value = ''
  mensagemErro.value = ''
  
  try {
    const response = await $fetch('/api/suggestions', {
      method: 'POST',
      body: form
    })
    
    sucesso.value = true
    mensagemStatus.value = response.message
    
    // Limpa o formulário
    form.nome = ''
    form.email = ''
    form.tipo = ''
    form.mensagem = ''
  } catch (error) {
    sucesso.value = false
    mensagemErro.value = 'erro'
    mensagemStatus.value = error.data?.statusMessage || 'Ocorreu um erro ao enviar sua sugestão. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}
</script>