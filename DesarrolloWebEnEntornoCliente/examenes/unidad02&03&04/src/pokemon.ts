
// TypeScript types for Pokémon data
interface IPokemon {
    id: number;
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    special_attack: number;
}

export default class Pokemon implements IPokemon {
    constructor (
        public id: number,
        public name: string, 
        public attack: number,
        public defense: number,
        public speed: number,
        public hp: number,
        public special_attack: number
    ) {}


    train(skill: keyof IPokemon, percent: number) {
        this[skill] = Math.round(this[skill] * (1 + percent / 100));
    }
}
