import equipmentData from '../../data/equipment.json'

export default defineEventHandler((event) => {
  return equipmentData.items || []
})