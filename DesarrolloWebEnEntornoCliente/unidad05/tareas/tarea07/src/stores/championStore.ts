import { defineStore } from 'pinia'
import { reactive, computed, ref, watch } from 'vue'
import type { Champion } from '@/components/classes/Champion'

export const championStore = defineStore('champion', () => {
  const champions = ref<Champion[]>([])

  const selectedChampion = reactive<Champion>({
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
