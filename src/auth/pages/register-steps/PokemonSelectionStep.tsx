import { Divider } from "@mui/material"
import { PokemonList } from "../../../PokeApp/components/PokemonList"
import { PokemonItemType } from "../../../PokeApp/types/PokemonItem.type";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { SearchPokemon } from "../../../PokeApp/components/SearchPokemon";


export const PokemonSelectionStep = () => {
    const preferences = useSelector((state: IRootState) => state.preferences);

    const defaultPokemons = [
        {
            name: 'Pikachu',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            checked: false
        },
        {
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            checked: false
        }
    ];

    const { pokemonList } = preferences;

    const availablePokemons: PokemonItemType[] = defaultPokemons
        .filter((pokemon) => !pokemonList.some((selectedPokemon) => selectedPokemon.name === pokemon.name));

    const selectedPokemons: PokemonItemType[] = pokemonList.length > 0 ? pokemonList : [];


    return (
        <>
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Available Pokemons
            </Divider>
            <SearchPokemon />
            <PokemonList pokemonList={availablePokemons} />
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Selected Pokemons
            </Divider>
            <PokemonList pokemonList={selectedPokemons} />
        </>
    )
}
