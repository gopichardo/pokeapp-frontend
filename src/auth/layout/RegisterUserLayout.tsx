import { Button, Container, Grid2, MobileStepper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { UseStepper } from "../../hooks/UseStepper";
import { RegisterContext } from "../context/RegisterContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


type RegisterUserLayoutProps = {
    children: React.ReactNode;
    title: string;
    steps: string[];
    isStepValid: () => boolean;
    onFinish: () => void;
}

export const RegisterUserLayout = ({ children, title, steps, onFinish, isStepValid }: RegisterUserLayoutProps) => {

    const { step: { currentStep } } = useContext(RegisterContext)

    const { step, totalSteps, prevStep, nextStep, isFirstStep, isFinalStep } = UseStepper({ totalSteps: steps.length, initialStep: currentStep });

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
                            onClick={handleOnClickNextButton}
                            disabled={false}
                        >
                            {isFinalStep ? 'Finish' : 'Next'}
                        </Button>}
                    steps={totalSteps}
                    activeStep={step}>
                </MobileStepper>
            </Container>
        </Grid2 >
    )
}

