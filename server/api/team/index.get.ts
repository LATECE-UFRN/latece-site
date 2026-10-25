import teamData from '../../data/team.json'

export default defineEventHandler((event) => {
  // O JSON enviado possui uma estrutura { "version": "...", "members": [...] }
  return teamData.members || []
})