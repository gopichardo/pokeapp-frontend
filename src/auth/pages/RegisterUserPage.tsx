import { RegisterUserLayout } from "../layout/RegisterUserLayout"
import './RegisterUserPage.css'
import { UserStep } from "./register-steps/UserStep";
import { StepPage } from "../../PokeApp/types/StepPage";
import { LocationStep } from "./register-steps/LocationStep";
import { PokemonSelectionStep } from "./register-steps/PokemonSelectionStep";
import { RegisterContext } from "../context/RegisterContext";
import { useContext, useRef, useState } from "react";
import { FinalStep } from "./register-steps/FinalStep";
import { IUserStepRef } from "../types/user-step-ref.interface";

export const RegisterUserPage = () => {
    const { step: { currentStep } } = useContext(RegisterContext)

    const userStepRef = useRef<IUserStepRef>(null);

    const pages: StepPage[] = [
        { page: < UserStep ref={userStepRef} index={0} />, title: "User Information", stepName: "User", index: 0 },
        { page: < LocationStep ref={userStepRef} index={1} />, title: "Location Permission", stepName: "Location", index: 1 },
        { page: < PokemonSelectionStep />, title: "Pokemon Selection", stepName: "Pokemon", index: 2 }
    ];

    const titles = pages.map(({ stepName }) => stepName);

    const pageToRender = pages.find(({ index }) => index === currentStep);
    const { page, title } = pageToRender as StepPage;

    const [showFinalPage, setShowFinalPage] = useState(false);

    const onFinish = () => {
        setShowFinalPage(true);
    }


    const onCheckStepIsValid = (): boolean => {
        const isValid = userStepRef.current?.validateStep() as boolean;
        return isValid;
    }

    return (
        showFinalPage ?
            <FinalStep />
            :
            <RegisterUserLayout
                title={title}
                steps={titles}
                onFinish={onFinish}
                isStepValid={onCheckStepIsValid}>
                {page}
            </RegisterUserLayout >
    )
}
