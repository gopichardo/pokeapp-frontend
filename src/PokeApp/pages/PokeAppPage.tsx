import { Box, Button, Grid2, Stack } from "@mui/material";
import pokemonImgUrl from '../../assets/images/pokemon-logo.svg'
import pokeballImgUrl from '../../assets/images/pokeball.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './PokeAppPage.css';
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

export const PokeAppPage = () => {

    const preferences = useSelector((state: IRootState) => state.preferences);
    const navigate = useNavigate();

    const onClickStart = () => {
        if (preferences.userInformation.email !== '') {
            navigate('/home');
        } else {
            navigate('/auth/register');
        }
    }

    return (
        <Grid2 container>
            <Grid2 size={{ xs: 12, md: 8, lg: 4, xl: 4 }}>
                <Stack spacing={2} direction="column" display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                        <img src={pokemonImgUrl} alt="Pokemon Logo" className="pokemon-logo" />
                        <img src={pokeballImgUrl} alt="Pokeball Logo" className="pokeball" />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth={false}
                            size="large"
                            startIcon={<PlayCircleIcon />}
                            onClick={onClickStart}
                        >Start</Button>
                    </Box>
                </Stack>
            </Grid2>
        </Grid2 >
    )
}
