<template>
  <div>
    <header style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #eee; padding-bottom: 1rem; margin-bottom: 2rem;">
      <div>
        <h1 style="margin-bottom: 0.2rem;">Painel Administrativo</h1>
        <p style="color: #666;">Bem-vindo, Administrador</p>
      </div>
      <button @click="fazerLogout" class="btn-primary" style="background-color: #a94442; border-color: #a94442;">
        Sair
      </button>
    </header>

    <div class="card-grid">
      <!-- Card Notícias (ATIVO) -->
      <article class="card">
        <h3><i class="fa-regular fa-newspaper" style="color: #113272; margin-right: 10px;"></i> Notícias</h3>
        <p>Gerenciar as notícias e eventos publicados no site.</p>
        <NuxtLink to="/admin/noticias" class="btn-primary" style="align-self: flex-start; margin-top: 1rem;">
          Acessar Módulo
        </NuxtLink>
      </article>

      <!-- Card Equipamentos (EM BREVE) -->
      <article class="card">
        <h3><i class="fa-solid fa-microscope" style="color: #113272; margin-right: 10px;"></i> Equipamentos</h3>
        <p>Adicionar, editar ou remover equipamentos do catálogo.</p>
        <button class="btn-primary" style="align-self: flex-start; margin-top: 1rem; opacity: 0.6; cursor: not-allowed;">
          Acessar Módulo (Em breve)
        </button>
      </article>

      <!-- Card Equipe (EM BREVE) -->
      <article class="card">
        <h3><i class="fa-solid fa-users" style="color: #113272; margin-right: 10px;"></i> Equipe</h3>
        <p>Gerenciar os membros e colaboradores do laboratório.</p>
        <button class="btn-primary" style="align-self: flex-start; margin-top: 1rem; opacity: 0.6; cursor: not-allowed;">
          Acessar Módulo (Em breve)
        </button>
      </article>

      <!-- Card Publicações (EM BREVE) -->
      <article class="card">
        <h3><i class="fa-solid fa-book" style="color: #113272; margin-right: 10px;"></i> Publicações</h3>
        <p>Gerenciar artigos e materiais didáticos disponíveis.</p>
        <button class="btn-primary" style="align-self: flex-start; margin-top: 1rem; opacity: 0.6; cursor: not-allowed;">
          Acessar Módulo (Em breve)
        </button>
      </article>
    </div>
    
    <div style="margin-top: 3rem; padding: 1.5rem; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
      <h4 style="color: #856404; margin-bottom: 0.5rem;">Atenção</h4>
      <p style="color: #856404; font-size: 0.9rem;">
        O módulo de Notícias está funcional. Os demais módulos serão implementados nas próximas etapas, quando a infraestrutura de Backend (PostgreSQL) estiver conectada.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCookie } from '#app'

definePageMeta({
  middleware: 'auth'
})

const authToken = useCookie('auth_token')

const fazerLogout = async () => {
  authToken.value = null
  await navigateTo('/')
}
</script>