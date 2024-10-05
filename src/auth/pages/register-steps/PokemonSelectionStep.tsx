import { Alert, Collapse, Divider, IconButton } from "@mui/material";
import { PokemonList } from "../../../PokeApp/components/PokemonList";
import { PokemonItemType } from "../../../PokeApp/types/PokemonItem.type";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { getPokemons } from "../../../api/pokemon-api";
import { IUserStepRef } from "../../types/user-step-ref.interface";
import CloseIcon from '@mui/icons-material/Close';


type PokemonSelectionStepProps = {
    index: number;
}

export const PokemonSelectionStep = forwardRef<IUserStepRef, PokemonSelectionStepProps>((_props, ref) => {
    const pokemonList = useSelector((state: IRootState) => state.preferences.pokemonList);
    const [allPokemons, setAllPokemons] = useState<PokemonItemType[]>([]);

    const [openAlertPokemonSelection, setOpenAlertPokemonSelection] = useState(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonData = await getPokemons(12);

                const formattedPokemons = pokemonData.map((pokemon) => ({
                    name: pokemon.name,
                    image: pokemon.image,
                    checked: pokemonList.some(
                        (selectedPokemon) => selectedPokemon.name === pokemon.name
                    ),
                }));
                setAllPokemons(formattedPokemons);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            }
        };

        fetchPokemons();
    }, []);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonData = await getPokemons(12);

                const formattedPokemons = pokemonData.map((pokemon) => ({
                    name: pokemon.name,
                    image: pokemon.image,
                    checked: pokemonList.some(
                        (selectedPokemon) => selectedPokemon.name === pokemon.name
                    ),
                }));
                setAllPokemons(formattedPokemons);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            }
        };

        fetchPokemons();
    }, [pokemonList]);


    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {

                const isValid = pokemonList.length >= 2;

                setOpenAlertPokemonSelection(!isValid);

                return isValid
            }
        }
    }
    )

    return (
        <>
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Available Pokemons
            </Divider>
            <Collapse in={openAlertPokemonSelection}>
                <Alert
                    variant="standard"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="medium"
                            onClick={() => {
                                setOpenAlertPokemonSelection(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}>
                    You must select at least 2 pokemons
                </Alert>
            </Collapse>

            <PokemonList
                pokemonList={allPokemons}
            />
        </>
    );
})