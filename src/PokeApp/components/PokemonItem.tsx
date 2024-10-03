import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { PokemonItemType } from "../types/PokemonItem.type";
import { useState } from "react";
import { selectPokemonItem, unselectPokemonItem } from "../../store/preferences/thunks";
import { useAppDispatch } from "../../store/store";

export const PokemonItem = ({ pokemon: { name, image, checked: initialChecked } }: PokemonItemProps) => {
    const dispatch = useAppDispatch();

    const [checked, setChecked] = useState(initialChecked);

    const onCheckChange = (value: boolean) => {
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
                <Checkbox
                    edge="end"
                    value={checked}
                    onChange={(_e, value) => { onCheckChange(value) }}
                    checked={checked}
                    inputProps={{ 'aria-labelledby': name }}
                />
            }
            disablePadding
        >
            <ListItemButton>
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