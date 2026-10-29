import teamData from '../../data/team.json'

export default defineEventHandler((event) => {
  return teamData.members || []
})