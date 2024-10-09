import { Avatar, Card, CardHeader, Container, IconButton, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { IRootState } from "../../store/store";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import PokeballIcon from '../../assets/images/pokeball.png'
import { PokeAppLayout } from "../layout/PokeAppLayout";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const preferences = useSelector((state: IRootState) => state.preferences);
    const navigate = useNavigate();


    const { userInformation, pokemonList } = preferences;

    const { name } = userInformation;

    return (
        <PokeAppLayout>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Hello {name}!
                </Typography>
                <Card
                    sx={{ mb: 3 }}
                    variant="elevation">
                    <CardHeader
                        avatar={
                            <Avatar
                                alt={`Pokemon Pikachu`}
                                src={PokeballIcon}
                            />
                        }
                        title={
                            <Typography variant="button" component="h2">
                                Go to my Pokemons
                            </Typography>
                        }
                        action={
                            <IconButton color="primary" onClick={() => { navigate("/pokemon-list") }}>
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                        subheader={`You have ${pokemonList.length} Pokemons`}
                    />
                </Card>
                <Card
                    sx={{ mb: 3 }}
                    variant="elevation">
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                                <ThunderstormIcon />
                            </Avatar>
                        }
                        title={
                            <Typography variant="button" component="h2">
                                Go to Weather
                            </Typography>
                        }
                        action={
                            <IconButton color="primary" onClick={() => { navigate("/weather") }}>
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                        subheader={`Temp: 21ºC`}
                    />
                </Card>
            </Container>
        </PokeAppLayout>
    )
}
