import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Switch } from "@mui/material"
import { PokemonItemType } from "../types/PokemonItem.type";
import { useState } from "react";
import { selectPokemonItem, unselectPokemonItem } from "../../store/preferences/thunks";
import { IRootState, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import PokeballIcon from '../../assets/images/pokeball.png'
import './PokemonItem.css';


export const PokemonItem = ({ pokemon: { name, image, checked: initialChecked } }: PokemonItemProps) => {
    const dispatch = useAppDispatch();
    const [checked, setChecked] = useState(initialChecked);

    const { pokemonList } = useSelector((state: IRootState) => state.preferences);
    const disableCheckbox = pokemonList.length >= 6 && !checked;

    const onCheckChange = (value: boolean) => {
        if (disableCheckbox) return;

        setChecked(value);

        if (value) {
            dispatch(selectPokemonItem({ name, image, checked: true }));

        } else {
            dispatch(unselectPokemonItem(name));
        }
    }


    return (
        <ListItem
            secondaryAction={
                <Switch
                    edge="end"
                    color="secondary"
                    value={checked}
                    onChange={(_e, value) => { onCheckChange(value) }}
                    checked={checked}
                    disabled={disableCheckbox}
                    icon={<img src={PokeballIcon} alt="Pokeball" className={`switch-icon-unselected ${disableCheckbox ? 'switch-icon-disabled' : ''}`} />}
                    checkedIcon={<img src={PokeballIcon} alt="Pokeball" className="switch-icon-selected" />}
                    inputProps={{ 'aria-labelledby': name }}
                />
            }
            disablePadding
        >
            <ListItemButton disabled={disableCheckbox}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Pokemon ${name}`}
                        src={image}
                    />
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}


type PokemonItemProps = {
    pokemon: PokemonItemType
}