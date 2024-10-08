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
        <Grid2 container flex='1' justifyContent='center' alignItems='center' height='100vh'>
            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 6, xs: 6 }}>
                <Stack
                    alignContent='center'
                    alignItems='center'
                    display='flex'
                    spacing={2}
                >
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                        <img src={pokemonImgUrl} alt="Pokemon Logo" className="pokemon-logo" style={{ maxWidth: '100%', height: 'auto' }} />
                        <img src={pokeballImgUrl} alt="Pokeball Logo" className="pokeball" style={{ maxWidth: '150px', height: 'auto' }} />
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
        </Grid2>
    )
}
