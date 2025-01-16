import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';

export const useChampionStore = defineStore('champion', () => {
  const champions = reactive([
    { id: 1, name: 'Aatrox', role: 'Fighter', stats: { health: 580, attack: 60, speed: 345 } },
    { id: 2, name: 'Ahri', role: 'Mage', stats: { health: 526, attack: 53, speed: 330 } },
  ]);
  
  const selectedChampion = reactive({ id: 0, name: '', role: '', stats: { health: 0, attack: 0, speed: 0 } });
  const experience = reactive({ value: 0 });

  const selectChampion = (champion: any) => {
    selectedChampion.id = champion.id;
    selectedChampion.name = champion.name;
    selectedChampion.role = champion.role;
    selectedChampion.stats = { ...champion.stats };
    experience.value = 0;
  };

  const gainExperience = () => {
    experience.value += 50;
  };

  const powerLevel = computed(() => {
    const { health, attack, speed } = selectedChampion.stats;
    return experience.value * 0.1 + health * 0.2 + attack * 0.3 + speed * 0.1;
  });

  return {
    champions,
    selectedChampion,
    experience,
    selectChampion,
    gainExperience,
    powerLevel,
  };
});
