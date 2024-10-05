import axios from "axios";
import { Pokemon } from "../domain/model/pokemon.model";

const POKEAPI_BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL;

export const getPokemons = async (limit = 12): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(
      `${POKEAPI_BASE_URL}pokemon?limit=${limit}`
    );
    const pokemonData = response.data.results as Pokemon[];

    const pokemonPromises = pokemonData.map(async (pokemon) => {
      const pokemonDetailsResponse = await axios.get(pokemon.url as string);
      const pokemonDetails = pokemonDetailsResponse.data;

      return {
        name: pokemon.name,
        image: pokemonDetails.sprites.front_default,
        url: pokemon.url,
      } as Pokemon;
    });

    return Promise.all(pokemonPromises);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error;
  }
};
