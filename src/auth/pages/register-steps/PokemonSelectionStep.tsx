import { Alert, Badge, Collapse, Divider, IconButton } from "@mui/material";
import { PokemonList } from "../../../PokeApp/components/PokemonList";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { IUserStepRef } from "../../types/user-step-ref.interface";
import CloseIcon from '@mui/icons-material/Close';
import { useFetchPokemons } from "../../../hooks/useFetchPokemons";
import PokeballIcon from '../../../assets/images/pokeball.png';
import './PokemonSelectionStep.css';



type PokemonSelectionStepProps = {
    index: number;
}

export const PokemonSelectionStep = forwardRef<IUserStepRef, PokemonSelectionStepProps>((_props, ref) => {
    const [openAlertPokemonSelection, setOpenAlertPokemonSelection] = useState(false);

    const {
        allPokemons,
        currentSelectedPokemons,
        minSelectionReached,
        minSelectablePokemons
    } = useFetchPokemons({ ammountToFetch: 12, minSelectablePokemons: 2, maxSelectablePokemons: 6 });

    useEffect(() => {
        if (minSelectionReached) {
            setOpenAlertPokemonSelection(false);
        }
    }, [minSelectionReached]);

    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {

                setOpenAlertPokemonSelection(!minSelectionReached);

                return minSelectionReached;
            }
        }
    }
    )

    return (
        <>
            <Divider textAlign="center" sx={{ mt: 2, fontWeight: "bold" }} variant="fullWidth">
                Selected Pokemons
                <Badge color="secondary" badgeContent={currentSelectedPokemons}>
                    <img src={PokeballIcon} alt="Pokeball" className="pokeball-badge-icon" />
                </Badge>
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
                    You must select at least {minSelectablePokemons} pokemons
                </Alert>
            </Collapse>

            <PokemonList
                pokemonList={allPokemons}
            />
        </>
    );
})