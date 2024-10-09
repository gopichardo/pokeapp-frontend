import { Box, Button, Container, Grid2, MobileStepper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useNavigate } from "react-router-dom";
import { useStepper } from "../../hooks/useStepper";


type RegisterUserLayoutProps = {
    children: React.ReactNode;
    title: string;
    steps: string[];
    isStepValid: () => boolean;
    onFinish: () => void;
}

export const RegisterUserLayout = ({ children, title, steps, onFinish, isStepValid }: RegisterUserLayoutProps) => {
    const {
        step,
        totalSteps,
        prevStep,
        nextStep,
        isFirstStep,
        isFinalStep
    } = useStepper({ totalSteps: steps.length, initialStep: 0 });

    const navigate = useNavigate();


    const handleOnClickBackButton = () => {
        if (isFirstStep) {
            navigate(-1);
        }
        else {
            prevStep();
        }
    }

    const handleOnClickNextButton = () => {
        if (isStepValid()) {
            nextStep();
        }

        if (isFinalStep && isStepValid()) { onFinish() }

    }

    return (
        <Grid2 container justifyContent='center' alignItems="center" height='100vh'>
            <Grid2 size={{
                xl: 2,
                lg: 4,
                md: 6,
                sm: 8,
                xs: 12
            }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh', // Default height for most screen sizes
                        '@media (min-width: 1536px)': { // Apply for 'xl' screens and above
                            height: '50vh',
                        },
                        '@media (min-width: 1200px)': { // Apply for 'lg' screens and above
                            height: '50vh',
                        },
                        '@media (min-width: 900px)': { // Apply for 'md' screens and above
                            height: '90vh',
                        },
                        '@media (min-width: 600px)': { // Apply for 'sm' screens and above
                            height: '80vh',
                        },
                    }}
                >
                    <Stepper activeStep={step} alternativeLabel sx={{ mt: 4 }}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Typography variant="h4" align="center" sx={{ mt: 2, mb: 2 }}>
                        {title}
                    </Typography>
                    <Box flexGrow={1} height='60vh' flexDirection='column'>
                        {children}
                    </Box>
                    <MobileStepper
                        variant="dots"
                        steps={totalSteps}
                        position="static"
                        activeStep={step}
                        backButton={
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={isFirstStep ? <CancelOutlinedIcon /> : <ArrowBackIosIcon />}
                                onClick={handleOnClickBackButton}>
                                {isFirstStep ? 'Cancel' : "Back"}
                            </Button>
                        }
                        nextButton={
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={isFinalStep ? <SaveOutlinedIcon /> : <ArrowForwardIosIcon />}
                                onClick={handleOnClickNextButton}
                                disabled={false}
                            >
                                {isFinalStep ? 'Finish' : 'Next'}
                            </Button>
                        }
                        sx={{
                            padding: 0,
                            mt: 2,
                            mb: 2
                        }}
                    >
                    </MobileStepper>
                </Container>
            </Grid2>
        </Grid2 >
    )
}

