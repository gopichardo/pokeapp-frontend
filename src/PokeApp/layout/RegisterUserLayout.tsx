import { Button, Container, Grid2, MobileStepper, Step, StepLabel, Stepper } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const RegisterUserLayout = ({ children, title }: RegisterUserLayoutProps) => {
    return (
        <Grid2 container>
            <Container>
                <Stepper alternativeLabel sx={{ mt: 2 }}>
                    <Step active>
                        <StepLabel>User</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Location</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Pokemons</StepLabel>
                    </Step>
                </Stepper>
                <h2>{title}</h2>
                {children}
                {/* Button < prev,next > */}
                <MobileStepper
                    variant="dots"
                    backButton={<Button variant="outlined" color="primary" startIcon={<ArrowBackIosIcon />}>Back</Button>}
                    nextButton={<Button variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>Next</Button>}
                    steps={3}>
                </MobileStepper>
            </Container>
        </Grid2 >
    )
}

type RegisterUserLayoutProps = {
    children: React.ReactNode;
    title: string;
}
