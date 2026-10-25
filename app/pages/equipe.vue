<template>
  <div>
    <section style="margin-bottom: 3rem; text-align: center;">
      <h1>Nossa Equipe</h1>
      <p>Conheça os pesquisadores, desenvolvedores e colaboradores do LATECE.</p>
    </section>

    <div v-if="pending" aria-live="polite" style="text-align: center;">Carregando equipe...</div>
    
    <div v-else>
      <div v-for="(grupo, roleName) in membrosAgrupados" :key="roleName" style="margin-bottom: 4rem;">
        <h2 style="border-bottom: 2px solid #113272; padding-bottom: 0.5rem; margin-bottom: 2rem; text-transform: capitalize;">
          {{ traduzirRole(roleName) }}
        </h2>

        <div class="card-grid">
          <article v-for="membro in grupo" :key="membro.id" class="card" style="text-align: center;">
            <!-- Área da Imagem com Fallback Acessível -->
            <div style="width: 120px; height: 120px; margin: 0 auto 1rem auto; border-radius: 50%; background-color: #e6f0fa; display: flex; align-items: center; justify-content: center; overflow: hidden;">
              <img 
                v-if="membro.photoUrl && membro.showPhoto !== false" 
                :src="membro.photoUrl.replace('assets/images', '/images')" 
                :alt="`Foto de ${membro.name}, ${membro.roleLabel}`"
                style="width: 100%; height: 100%; object-fit: cover;"
                @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }"
              />
              <!-- Fallback (Ícone) acessível -->
              <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;" role="img" :aria-label="`Avatar genérico de ${membro.name}`">
                <i class="fa-solid fa-user" style="font-size: 3rem; color: #113272;"></i>
              </div>
            </div>

            <h3 style="margin-bottom: 0.2rem;">{{ membro.name }}</h3>
            <p style="font-size: 0.9rem; color: #113272; font-weight: bold; margin-bottom: 0.5rem;">
              {{ membro.roleLabel }}
            </p>
            <p style="font-size: 0.85rem; margin-bottom: 0.2rem;">{{ membro.institution }}</p>
            
            <a 
              v-if="membro.lattesUrl" 
              :href="membro.lattesUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-primary" 
              style="align-self: center; font-size: 0.85rem; padding: 6px 12px; margin-top: 1rem;"
              :aria-label="`Acessar Currículo Lattes de ${membro.name} (abre em nova aba)`"
            >
              Lattes <i class="fa-solid fa-external-link-alt" style="margin-left: 5px;" aria-hidden="true"></i>
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFetch } from '#app'

const { data: membros, pending } = await useFetch('/api/team')

const membrosAgrupados = computed(() => {
  if (!membros.value) return {}
  return membros.value.reduce((acc, membro) => {
    const role = membro.role || 'outros'
    if (!acc[role]) acc[role] = []
    acc[role].push(membro)
    return acc
  }, {})
})

const traduzirRole = (role) => {
  const traducoes = {
    'coordinator': 'Coordenação',
    'technician': 'Equipe Técnica',
    'student': 'Estudantes / Bolsistas',
    'partner': 'Pesquisadores Parceiros',
    'collaborator': 'Colaboradores',
    'developer': 'Desenvolvedores'
  }
  return traducoes[role] || role
}
</script>