import { RegisterUserLayout } from "../layout/RegisterUserLayout"
import './RegisterUserPage.css'
import { UserStep } from "./register-steps/UserStep";
import { StepPage } from "../../PokeApp/types/StepPage";
import { LocationStep } from "./register-steps/LocationStep";
import { PokemonSelectionStep } from "./register-steps/PokemonSelectionStep";
import { RegisterContext } from "../context/RegisterContext";
import { useContext } from "react";

export const RegisterUserPage = () => {

    const { step: { currentStep } } = useContext(RegisterContext)


    const pages: StepPage[] = [
        { page: < UserStep />, title: "User Information", stepName: "User", index: 0 },
        { page: < LocationStep />, title: "Location Permission", stepName: "Location", index: 1 },
        { page: < PokemonSelectionStep />, title: "Pokemon Selection", stepName: "Pokemon", index: 2 }

    ];

    const titles = pages.map(({ stepName }) => stepName);

    const pageToRender = pages.find(({ index }) => index === currentStep);

    const { page, title } = pageToRender as StepPage;

    return (
        <RegisterUserLayout title={title} steps={titles}>
            {page}
        </RegisterUserLayout >
    )
}
