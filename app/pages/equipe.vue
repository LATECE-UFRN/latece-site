<template>
  <div>
    <section style="margin-bottom: 3rem; text-align: center;">
      <h1>Nossa Equipe</h1>
      <p>Conheça os pesquisadores, desenvolvedores e colaboradores do LATECE.</p>
    </section>

    <div v-if="pending" style="text-align: center; padding: 3rem;">
      <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
      <p>Carregando equipe...</p>
    </div>
    
    <div v-else>
      <!-- Loop sobre os Grupos (Coordenação, Técnicos, Parceiros, etc) -->
      <div v-for="(grupo, roleName) in membrosAgrupados" :key="roleName">
        
        <h2 class="team-section-title">{{ traduzirRole(roleName) }}</h2>
        
        <!-- GRUPO A: Cartões com Imagem -->
        <div v-if="isGrupoA(roleName)" class="team-cards-grid">
          <article v-for="membro in grupo" :key="membro.id" class="team-card-item">
            <img 
              v-if="membro.photoUrl" 
              :src="membro.photoUrl.replace('assets/images', '/images')" 
              :alt="`Foto de ${membro.name}`"
              class="team-card-photo"
              @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }"
            />
            <div v-if="!membro.photoUrl" style="width: 120px; height: 120px; border-radius: 50%; background-color: #e6f0fa; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; border: 3px solid #f0f0f0;">
              <i class="fa-solid fa-user" style="font-size: 3rem; color: #113272;"></i>
            </div>
            
            <h3 class="team-card-name">{{ membro.name }}</h3>
            <p class="team-card-role">{{ membro.roleLabel || membro.role }}</p>
            <p class="team-card-inst">{{ membro.institution }}</p>
            
            <a 
              v-if="membro.lattesUrl" 
              :href="membro.lattesUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-primary" 
              style="font-size: 0.85rem; padding: 6px 12px; margin-top: auto;"
            >
              Lattes <i class="fa-solid fa-external-link-alt" style="margin-left: 5px;" aria-hidden="true"></i>
            </a>
          </article>
        </div>

        <!-- GRUPO B: Listas Informativas (Conforme imagem) -->
        <div v-else class="team-list-container">
          <div v-for="membro in grupo" :key="membro.id" class="team-list-item">
            <div class="team-list-info">
              <h3>{{ membro.name }}</h3>
              <p>{{ membro.roleLabel || membro.role }} | {{ membro.institution }}</p>
            </div>
            <div class="team-list-action">
              <a 
                v-if="membro.lattesUrl" 
                :href="membro.lattesUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-lattes-icon"
                :aria-label="`Acessar Currículo Lattes de ${membro.name}`"
                title="Acessar Currículo Lattes"
              >
                <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
import { computed } from 'vue'

const { data: membros, pending } = await useFetch('/api/team')

const membrosAgrupados = computed(() => {
  if (!membros.value) return {}
  
  // Ordena as roles para manter uma ordem lógica na tela
  const ordemRoles = ['coordinator', 'technician', 'student', 'bolsista', 'partner', 'collaborator', 'developer']
  
  const agrupado = membros.value.reduce((acc, membro) => {
    const role = membro.role || 'outros'
    if (!acc[role]) acc[role] = []
    acc[role].push(membro)
    return acc
  }, {})

  // Retorna o objeto ordenado
  const ordenado = {}
  ordemRoles.forEach(r => { if(agrupado[r]) ordenado[r] = agrupado[r] })
  Object.keys(agrupado).forEach(r => { if(!ordenado[r]) ordenado[r] = agrupado[r] })
  
  return ordenado
})

const isGrupoA = (role) => {
  const rolesGrupoA = ['coordinator', 'technician', 'student', 'bolsista', 'pesquisador']
  return rolesGrupoA.includes(role.toLowerCase())
}

const traduzirRole = (role) => {
  const traducoes = {
    'coordinator': 'Coordenação',
    'technician': 'Equipe Técnica e de Pesquisa',
    'student': 'Estudantes / Bolsistas',
    'bolsista': 'Estudantes / Bolsistas',
    'partner': 'Pesquisadores Parceiros',
    'collaborator': 'Colaboradores',
    'developer': 'Desenvolvedores',
    'outros': 'Outros Integrantes'
  }
  return traducoes[role.toLowerCase()] || role
}
</script>