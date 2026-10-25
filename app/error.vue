<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; text-align: center; padding: 2rem;">
    <i class="fa-solid fa-triangle-exclamation" style="font-size: 5rem; color: #f39c12; margin-bottom: 2rem;"></i>
    
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">{{ error.statusCode }}</h1>
    
    <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px;">
      {{ mensagemErro }}
    </p>

    <button @click="voltarParaHome" class="btn-primary" style="font-size: 1.1rem;">
      <i class="fa-solid fa-house" style="margin-right: 8px;"></i> Voltar para a Página Inicial
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { clearError, useRouter } from '#app'

const props = defineProps({
  error: Object
})

const router = useRouter()

const mensagemErro = computed(() => {
  if (props.error.statusCode === 404) {
    return 'A página que você está procurando não existe ou foi movida. Verifique o endereço digitado.'
  }
  return 'Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais tarde.'
})

const voltarParaHome = () => {
  clearError({ redirect: '/' })
}
</script>