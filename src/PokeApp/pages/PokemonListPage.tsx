import { useSelector } from "react-redux"
import { PokeAppLayout } from "../layout/PokeAppLayout"
import { IRootState } from "../../store/store";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

export const PokemonListPage = () => {

    const pokemonList = useSelector((state: IRootState) => state.preferences.pokemonList);

    return (
        <PokeAppLayout>
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Selected Pokemons
            </Divider>
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    pokemonList.map(({ name, image }, i) => {
                        return (
                            <ListItem key={i} disablePadding>
                                <ListItemButton href={'/pokemon/' + name}>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt={`Pokemon ${name}`}
                                            src={image}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>

        </PokeAppLayout>
    )
}
