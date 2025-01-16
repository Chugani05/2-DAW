import { defineStore } from 'pinia'
import { reactive, computed, ref } from 'vue'

export const championStore = defineStore('champion', () => {
  const champions = reactive([
    {
      id: 1,
      name: 'Aatrox',
      role: 'Fighter',
      stats: { health: 580, attack: 60, speed: 345 },
      level: 1,
    },
    { id: 2, name: 'Ahri', role: 'Mage', stats: { health: 526, attack: 53, speed: 330 }, level: 1 },
    {
      id: 3,
      name: 'Yasuo',
      role: 'Fighter',
      stats: { health: 500, attack: 65, speed: 350 },
      level: 1,
    },
    {
      id: 4,
      name: 'Jinx',
      role: 'Marksman',
      stats: { health: 500, attack: 60, speed: 330 },
      level: 1,
    },
    { id: 5, name: 'Lux', role: 'Mage', stats: { health: 510, attack: 50, speed: 335 }, level: 1 },
    {
      id: 6,
      name: 'Lee Sin',
      role: 'Fighter',
      stats: { health: 570, attack: 62, speed: 340 },
      level: 1,
    },
  ])

  const selectedChampion = reactive({
    id: 0,
    name: '',
    role: '',
    stats: { health: 0, attack: 0, speed: 0 },
    level: 0,
  })
  const experience = ref(0)

  const selectChampion = (champion: any) => {
    selectedChampion.id = champion.id
    selectedChampion.name = champion.name
    selectedChampion.role = champion.role
    selectedChampion.stats = { ...champion.stats }
    selectedChampion.level = champion.level
    experience.value = 0
  }

  const gainExperience = () => {
    experience.value += 50
  }

  const powerLevel = computed(() => {
    const { health, attack, speed } = selectedChampion.stats
    return experience.value * 0.1 + health * 0.2 + attack * 0.3 + speed * 0.1
  })

  return {
    champions,
    selectedChampion,
    experience,
    selectChampion,
    gainExperience,
    powerLevel,
  }
})

// watch(
//   () => store.powerLevel,
//   (newPowerLevel, oldPowerLevel) => {
//     if (newPowerLevel > oldPowerLevel) {
//       powerLevelMessage.value = '¡Nivel de poder incrementado!'
//     } else {
//       powerLevelMessage.value = ''
//     }
//   },
// )
