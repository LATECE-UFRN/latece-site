<template>
  <nav v-if="totalPages > 1" aria-label="Navegação de páginas" class="pagination-container">
    <button 
      class="pagination-btn" 
      :disabled="currentPage === 1" 
      @click="changePage(currentPage - 1)"
      aria-label="Página anterior"
    >
      &laquo; Anterior
    </button>

    <ul class="pagination-list">
      <li v-for="page in pages" :key="page">
        <button 
          v-if="page !== '...'"
          class="pagination-btn" 
          :class="{ 'active': currentPage === page }"
          @click="changePage(page)"
          :aria-current="currentPage === page ? 'page' : undefined"
          :aria-label="`Ir para a página ${page}`"
        >
          {{ page }}
        </button>
        <span v-else class="pagination-ellipsis" aria-hidden="true">...</span>
      </li>
    </ul>

    <button 
      class="pagination-btn" 
      :disabled="currentPage === totalPages" 
      @click="changePage(currentPage + 1)"
      aria-label="Próxima página"
    >
      Próxima &raquo;
    </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:currentPage'])

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}

// Lógica para exibir no máximo 5 botões de página por vez (ex: 1 ... 4 5 6 ... 10)
const pages = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  const delta = 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
})
</script>