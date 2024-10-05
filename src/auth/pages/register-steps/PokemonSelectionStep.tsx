import { Divider } from "@mui/material";
import { PokemonList } from "../../../PokeApp/components/PokemonList";
import { PokemonItemType } from "../../../PokeApp/types/PokemonItem.type";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { getPokemons } from "../../../api/pokemon-api";

export const PokemonSelectionStep = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItemType[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonData = await getPokemons(12);

                const formattedPokemons = pokemonData.map((pokemon) => ({
                    name: pokemon.name,
                    image: pokemon.image,
                    checked: false,
                }));
                setAllPokemons(formattedPokemons);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            }
        };

        fetchPokemons();
    }, []);

    const preferences = useSelector((state: IRootState) => state.preferences);
    const { pokemonList } = preferences;

    useEffect(() => {
        setAllPokemons((prevPokemons) =>
            prevPokemons.map((pokemon) => {
                const isSelected = pokemonList.some(
                    (selectedPokemon) => selectedPokemon.name === pokemon.name
                );
                return { ...pokemon, checked: isSelected };
            })
        );
    }, [pokemonList]);

    return (
        <>
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Available Pokemons
            </Divider>
            <PokemonList
                pokemonList={allPokemons}
            />
        </>
    );
};
