import $ from "jquery"
import { Pokemon, IPokemon } from "./pokemon.js"

class PokemonTrainer {
  private pokemonData: Pokemon[] = [];

  async loadPokemonList(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/pokemon_data');
      if (!response.ok) {
        throw new Error('Failed to load Pokemon data');
      }
      const data: IPokemon[] = await response.json();
      this.pokemonData = data.map(pokemon => new Pokemon(
        pokemon.id,
        pokemon.name,
        pokemon.attack,
        pokemon.defense,
        pokemon.speed,
        pokemon.hp,
        pokemon.special_attack
      ));
      this.populatePokemonList();
    } catch (error) {
      console.error(error);
      alert('Error loading Pokemon data.');
    }
  }


  async startTraining(pokemonId: number, skill: keyof IPokemon): Promise<void> {
    const pokemon = this.pokemonData.find(p => p.id === pokemonId);
    if (!pokemon) {
      alert('Pokémon no encontrado');
      return;
    }
  
    const trainingTime = Math.floor(Math.random() * 10) + 1;
    $('#training-status').show();
    $('#status-message').text(`Entrenando a ${pokemon.name} en ${skill} durante ${trainingTime} segundos.`);
  
    await new Promise(resolve => setTimeout(resolve, trainingTime * 1000));
  
    pokemon.train(skill, 10);
    $('#status-message').text(`El Pokémon ${pokemon.name} ha subido su ${skill} a ${pokemon[skill]}. ¿Deseas actualizar estos puntos?`);
   
    if (confirm('¿Actualizar los puntos en el servidor?')) {
      await this.updatePokemonData(pokemon);
    }
   
    $('#training-status').hide();
  }


  async updatePokemonData(updatedPokemon: Pokemon): Promise<void> {
    try {
      console.log('Enviando datos actualizados al servidor:', updatedPokemon);
      const response = await fetch('http://localhost:3000/pokemon_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPokemon)
      });
      if (!response.ok) {
        throw new Error('Failed to update Pokemon data');
      }
      console.log('Pokemon data updated successfully');
    } catch (error) {
      console.error('Error updating Pokemon data:', error);
      alert('Failed to update Pokémon data.');
    }
  }


  private populatePokemonList(): void {
    const $pokemonList = $('#pokemon-list');
    $pokemonList.empty();

    this.pokemonData.forEach(pokemon => {
      $pokemonList.append(
        $('<option></option>').val(pokemon.id).text(pokemon.name)
      );
    });
  }
}


$(document).ready(async () => {
  const trainer = new PokemonTrainer();
  await trainer.loadPokemonData();

  $('#start-training').on('click', () => {
      const pokemonId = Number($('#pokemon-list').val());
      const skill = prompt("¿Qué habilidad deseas entrenar? (attack, defense, speed, hp, special_attack)") as keyof IPokemon;
     
      if (pokemonId && skill) {
          trainer.startTraining(pokemonId, skill);
      }
  });
});


export {};