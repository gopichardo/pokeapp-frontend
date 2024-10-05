import { useContext } from "react";
import { RegisterContext } from "../auth/context/RegisterContext";

export const UseStepper = ({ totalSteps }: UseStepperProps) => {
  // const [step, setStep] = useState<number>(initialStep);

  const {
    setStep,
    step: { currentStep: step },
  } = useContext(RegisterContext);

  const nextStep = () => {
    if (step < totalSteps - 1) setStep({ currentStep: step + 1 });
  };

  const prevStep = () => {
    if (step > 0) setStep({ currentStep: step - 1 });
  };

  return {
    step,
    totalSteps,
    nextStep,
    prevStep,
    isFirstStep: step === 0,
    isFinalStep: step === totalSteps - 1,
  };
};

type UseStepperProps = {
  initialStep: number;
  totalSteps: number;
};
