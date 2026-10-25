<template>
  <div style="max-width: 400px; margin: 4rem auto; padding: 2rem; background: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 2rem;">
      <i class="fa-solid fa-lock" style="font-size: 3rem; color: #113272; margin-bottom: 1rem;" aria-hidden="true"></i>
      <h1 style="font-size: 1.8rem;">Acesso Restrito</h1>
      <p style="color: #666;">Área administrativa do LATECE</p>
    </div>

    <form @submit.prevent="tentarLogin" novalidate>
      <div style="margin-bottom: 1rem;">
        <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Usuário ou E-mail <span aria-hidden="true">*</span></label>
        <input 
          type="text" 
          id="email" 
          v-model="form.email" 
          required
          aria-required="true"
          :aria-invalid="!!mensagemErro"
          aria-describedby="erro-login"
          style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"
          placeholder="admin"
        />
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Senha <span aria-hidden="true">*</span></label>
        <input 
          type="password" 
          id="password" 
          v-model="form.password" 
          required
          aria-required="true"
          :aria-invalid="!!mensagemErro"
          aria-describedby="erro-login"
          style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"
          placeholder="admin123"
        />
      </div>

      <button type="submit" class="btn-primary" style="width: 100%;" :disabled="isLoading">
        <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Entrando...</span>
        <span v-else>Entrar</span>
      </button>
    </form>

    <div 
      v-if="mensagemErro" 
      id="erro-login"
      role="alert"
      aria-live="assertive"
      style="margin-top: 1rem; padding: 1rem; border-radius: 4px; text-align: center; background: #f2dede; color: #a94442; font-weight: bold;"
    >
      {{ mensagemErro }}
    </div>

    <div style="text-align: center; margin-top: 2rem; font-size: 0.85rem; color: #888;">
      <NuxtLink to="/" style="color: #113272;">&larr; Voltar para o site principal</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

const isLoading = ref(false)
const mensagemErro = ref('')

const tentarLogin = async () => {
  isLoading.value = true
  mensagemErro.value = ''

  try {
    // O servidor define o cookie httpOnly automaticamente
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: form.value
    })

    // Redireciona para o painel
    await navigateTo('/admin')
  } catch (error) {
    mensagemErro.value = error.data?.statusMessage || 'Erro ao tentar fazer login. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}
</script>