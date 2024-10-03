import { Button, Container, Grid2, MobileStepper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { UseStepper } from "../../hooks/UseStepper";
import { RegisterContext } from "../context/RegisterContext";
import { useContext } from "react";

export const RegisterUserLayout = ({ children, title, steps, onFinish }: RegisterUserLayoutProps) => {

    const { step: { currentStep } } = useContext(RegisterContext)

    const { step, totalSteps, prevStep, nextStep, isFirstStep, isFinalStep } = UseStepper({ totalSteps: steps.length, initialStep: currentStep });

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
                <Typography variant="h4" align="center" sx={{ mt: 2, mb: 2 }}>
                    {title}
                </Typography>
                {children}
                {/* Button < prev,next > */}
                <MobileStepper
                    variant="dots"
                    backButton={
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={isFirstStep ? <CancelOutlinedIcon /> : <ArrowBackIosIcon />}
                            onClick={handleOnClickBackButton}>
                            {isFirstStep ? 'Cancel' : "Back"}
                        </Button>}
                    nextButton={
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={isFinalStep ? <SaveOutlinedIcon /> : <ArrowForwardIosIcon />}
                            onClick={isFinalStep ? onFinish : handleOnClickNextButton}>
                            {isFinalStep ? 'Finish' : 'Next'}
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
    onFinish: () => void;
}