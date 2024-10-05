import { Pokemon } from "../../domain/model/pokemon.model";

export type PokemonItemType = Pokemon & {
  checked: boolean;
};
