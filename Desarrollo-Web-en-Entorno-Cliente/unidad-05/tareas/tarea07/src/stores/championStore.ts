import { defineStore } from 'pinia'
import { reactive, computed, ref, watch } from 'vue'

export const championStore = defineStore('champion', () => {
  const champions = reactive([
    {
      id: 1,
      name: 'Aatrox',
      role: 'Fighter',
      stats: { health: 580, attack: 60, speed: 345 },
      level: 1, 
      image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Aatrox.png',
    },
    { id: 2, name: 'Ahri', role: 'Mage', stats: { health: 526, attack: 53, speed: 330 }, level: 1, image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Ahri.png', },
    {
      id: 3,
      name: 'Yasuo',
      role: 'Fighter',
      stats: { health: 500, attack: 65, speed: 350 },
      level: 1,
      image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Yasuo.png',
    },
    {
      id: 4,
      name: 'Jinx',
      role: 'Marksman',
      stats: { health: 500, attack: 60, speed: 330 },
      level: 1,
      image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Jinx.png',
    },
    { id: 5, name: 'Lux', role: 'Mage', stats: { health: 510, attack: 50, speed: 335 }, level: 1, image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Lux.png', },
    {
      id: 6,
      name: 'Lee Sin',
      role: 'Fighter',
      stats: { health: 570, attack: 62, speed: 340 },
      level: 1,
      image: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/LeeSin.png',
    },
  ])

  const selectedChampion = reactive({
    id: 0,
    name: '',
    role: '',
    stats: { health: 0, attack: 0, speed: 0 },
    level: 0,
    image: '',
  })
  const experience = ref(0)

  const selectChampion = (champion: any) => {
    selectedChampion.id = champion.id
    selectedChampion.name = champion.name
    selectedChampion.role = champion.role
    selectedChampion.stats = { ...champion.stats }
    selectedChampion.level = champion.level
    selectedChampion.image = champion.image
    experience.value = 0
  }

  const gainExperience = () => {
    experience.value += 22.5
  }

  const power = computed(() => {
    const { health, attack, speed } = selectedChampion.stats
    return selectedChampion.level * 10.5 + health * 0.3 + attack * 0.4 + speed * 0.2
  })

  watch(experience, (newExperience) => {
    if (newExperience >= 100) {
      alert('El campeón acaba de subir de nivel!!')
      selectedChampion.level++
      experience.value = 0
    }
  })

  return {
    champions,
    selectedChampion,
    experience,
    selectChampion,
    gainExperience,
    power,
  }
})

