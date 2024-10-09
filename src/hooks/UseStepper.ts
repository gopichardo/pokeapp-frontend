import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../store/store";
import { setNewStep } from "../store/registerStep/thunks";

export const useStepper = ({ totalSteps }: UseStepperProps) => {
  const step = useSelector((state: IRootState) => state.registerStep.step);
  const dispatch = useAppDispatch();

  const nextStep = () => {
    if (totalSteps - 1 === step) {
      dispatch(setNewStep(0));
    }
    if (step < totalSteps - 1) {
      dispatch(setNewStep(step + 1));
    }
  };

  const prevStep = () => {
    if (step > 0) dispatch(setNewStep(step - 1));
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
