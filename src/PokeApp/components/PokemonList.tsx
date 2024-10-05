import { List, Typography, } from "@mui/material";
import { PokemonItem } from "./PokemonItem";
import { PokemonItemType } from "../types/PokemonItem.type";

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
    return (
        pokemonList.length > 0 ?
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    pokemonList.map((pokemonItem) => {
                        return <PokemonItem key={pokemonItem.name} pokemon={pokemonItem} />
                    })
                }
            </List>
            :
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
                No items to show
            </Typography>
    );
}


type PokemonListProps = {
    pokemonList: PokemonItemType[]
}

