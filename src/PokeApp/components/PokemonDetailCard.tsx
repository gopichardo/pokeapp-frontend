import { AppBar, Avatar, Card, CardContent, CardHeader, CardMedia, Chip, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { PokemonItemType } from "../types/PokemonItem.type";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PokeballIcon from '../../assets/images/pokeball.png';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";




type PokemonDetailCardProps = {
    pokemon: PokemonItemType
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const PokemonDetailCard = ({ pokemon }: PokemonDetailCardProps) => {

    const navigate = useNavigate();



    const handleClose = () => {
        navigate('/pokemon-list');
    };

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Pokemon Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
                <CardHeader
                    title={
                        <Typography variant="h4" component="h2">
                            {pokemon.name}
                        </Typography>
                    }
                    avatar={
                        <Avatar
                            alt={`Pokemon Pikachu`}
                            src={PokeballIcon}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                    action={
                        <IconButton
                            size="large"
                            color="secondary" aria-label="location"
                        >
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    component="img"
                    image={pokemon.image}
                    alt={pokemon.name}
                    sx={{ width: 200, alignContent: "center", margin: "auto" }}
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        Abilities
                    </Typography>
                    {pokemon.abilities?.map((ability: string, index: number) => (
                        <Chip
                            key={index}
                            sx={{ marginRight: 1, marginTop: 1 }}
                            variant="outlined"
                            color="secondary"
                            icon={<CatchingPokemonOutlinedIcon />}
                            label={ability}
                        />
                    ))}
                </CardContent>
            </Card>
        </Dialog>
    );
}
