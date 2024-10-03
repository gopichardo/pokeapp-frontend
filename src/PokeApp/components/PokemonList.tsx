import { List, } from "@mui/material";
import { PokemonItem } from "./PokemonItem";
import { PokemonItemType } from "../types/PokemonItem.type";

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                pokemonList.map((pokemonItem) => {
                    return <PokemonItem key={pokemonItem.name} pokemon={pokemonItem} />
                })
            }
        </List>
    );
}


type PokemonListProps = {
    pokemonList: PokemonItemType[]
}

