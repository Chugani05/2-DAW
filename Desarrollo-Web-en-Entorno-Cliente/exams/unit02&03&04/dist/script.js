var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PokemonTrainer {
    constructor() {
        this.pokemonData = [];
    }
    loadPokemonList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:3000/pokemon_data');
                if (!response.ok) {
                    throw new Error('Failed to load Pokemon data');
                }
                const data = yield response.json();
                this.pokemonData = data.map(pokemon => new Pokemon(pokemon.id, pokemon.name, pokemon.attack, pokemon.defense, pokemon.speed, pokemon.hp, pokemon.special_attack));
                this.populatePokemonList();
            }
            catch (error) {
                console.error(error);
                alert('Error loading Pokemon data.');
            }
        });
    }
    updatePokemonData(updatedPokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Enviando datos actualizados al servidor:', updatedPokemon);
                const response = yield fetch('http://localhost:3000/pokemon_data', {
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
            }
            catch (error) {
                console.error('Error updating Pokemon data:', error);
                alert('Failed to update Pokémon data.');
            }
        });
    }
}
export {};
