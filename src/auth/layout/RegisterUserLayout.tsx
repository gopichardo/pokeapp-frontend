import { Button, Container, Grid2, MobileStepper, Step, StepLabel, Stepper } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { UseStepper } from "../../hooks/UseStepper";
import { RegisterContext } from "../context/RegisterContext";
import { useContext } from "react";

export const RegisterUserLayout = ({ children, title, steps }: RegisterUserLayoutProps) => {

    const { step: { currentStep } } = useContext(RegisterContext)

    const { step, totalSteps, prevStep, nextStep } = UseStepper({ totalSteps: steps.length, initialStep: currentStep });

    const handleOnClickBackButton = () => {
        prevStep();
    }

    const handleOnClickNextButton = () => {
        nextStep();
    }

    return (
        <Grid2 container>
            <Container>
                <Stepper activeStep={step} alternativeLabel sx={{ mt: 2 }}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <h2>{title}</h2>
                {children}
                {/* Button < prev,next > */}
                <MobileStepper
                    variant="dots"
                    backButton={
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={handleOnClickBackButton}>
                            Back
                        </Button>}
                    nextButton={
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIosIcon />}
                            onClick={handleOnClickNextButton}>
                            Next
                        </Button>}
                    steps={totalSteps}
                    activeStep={step}>
                </MobileStepper>
            </Container>
        </Grid2 >
    )
}

type RegisterUserLayoutProps = {
    children: React.ReactNode;
    title: string;
    steps: string[];
}