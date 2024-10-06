import { useParams } from "react-router-dom";
import { PokemonDetailCard } from "../components/PokemonDetailCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { Typography } from "@mui/material";
import { PokeAppLayout } from "../layout/PokeAppLayout";

export const PokemonDetailPage = () => {
    const { name } = useParams();

    const pokemon = useSelector((state: IRootState) => state.preferences.pokemonList.find(pokemon => pokemon.name === name));



    return (
        <PokeAppLayout>
            {
                pokemon ?
                    <PokemonDetailCard pokemon={pokemon} /> :
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Pokemon not found</Typography>
            }
        </PokeAppLayout>

    )
}
