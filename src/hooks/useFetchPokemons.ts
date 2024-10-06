import { useEffect, useState } from "react";
import { getPokemons } from "../api/pokemon-api";
import { PokemonItemType } from "../PokeApp/types/PokemonItem.type";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";

type UseFetchPokemonsParams = {
  ammountToFetch: number;
  maxSelectablePokemons: number;
  minSelectablePokemons: number;
};

export const useFetchPokemons = ({
  ammountToFetch = 12,
  minSelectablePokemons = 2,
  maxSelectablePokemons = 6,
}: UseFetchPokemonsParams) => {
  const pokemonList = useSelector(
    (state: IRootState) => state.preferences.pokemonList
  );

  const [allPokemons, setAllPokemons] = useState<PokemonItemType[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonData = await getPokemons(ammountToFetch);

        const formattedPokemons = pokemonData.map((pokemon) => ({
          name: pokemon.name,
          image: pokemon.image,
          checked: pokemonList.some(
            (selectedPokemon) => selectedPokemon.name === pokemon.name
          ),
          abilities: pokemon.abilities,
        }));
        setAllPokemons(formattedPokemons);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, [ammountToFetch]);

  return {
    allPokemons,
    minSelectablePokemons,
    maxSelectablePokemons,
    currentSelectedPokemons: pokemonList.length,
    minSelectionReached: pokemonList.length >= minSelectablePokemons,
    maxSelectionReached: pokemonList.length === maxSelectablePokemons,
  };
};
