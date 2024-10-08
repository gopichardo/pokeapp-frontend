import { Button, Container, Grid2, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import PikachuIcon from '../../../assets/images/pikachu.png';

export const FinalStep = () => {
    const navigate = useNavigate();

    const preferences = useSelector((state: IRootState) => state.preferences);


    return (
        <Grid2 container justifyContent='center' alignItems="center" height='100vh'>
            <Grid2 size={{
                xl: 2,
                lg: 4,
                md: 6,
                sm: 8,
                xs: 12
            }}>
                <Container>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                        <Typography variant="h2" align="center">
                            Thank you {preferences.userInformation?.name}!
                        </Typography>
                        <Typography variant="body1" align="center">
                            Your register finished successfully, now you can go to the home page.
                        </Typography>
                        <img src={PikachuIcon}/>
                        <Button variant="contained" onClick={() => navigate('/home')} size="large">Go Home</Button>
                    </Stack>
                </Container>
            </Grid2>
        </Grid2 >
    )
}
