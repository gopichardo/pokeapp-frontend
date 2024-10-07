import axios from "axios";
import { Pokemon } from "../domain/model/pokemon.model";
import { POKEAPI_BASE_URL } from "../config/envrinmoment-config";

export const getPokemons = async (limit = 12): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(
      `${POKEAPI_BASE_URL}pokemon?limit=${limit}`
    );
    const pokemonData = response.data.results as Pokemon[];

    const pokemonPromises = pokemonData.map(async (pokemon) => {
      const pokemonDetailsResponse = await axios.get(pokemon.url as string);
      const pokemonDetails = pokemonDetailsResponse.data;

      const abilities = pokemonDetails.abilities.map(
        (ability: { ability: { name: string } }) => ability.ability.name
      );

      const newPokemon: Pokemon = {
        name: pokemon.name,
        image: pokemonDetails.sprites.front_default,
        url: pokemon.url,
        abilities,
      };

      return newPokemon;
    });

    return Promise.all(pokemonPromises);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error;
  }
};
