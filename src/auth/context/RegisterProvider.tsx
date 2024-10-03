import { useState } from "react";
import { RegisterContext } from "./RegisterContext";
import { StepPageType } from "../types/step-page.type";
import { UserPreferences } from "../../domain/model/user-preferences.model";

export const RegisterProvider = ({ children }: RegisterProviderProps) => {

    const [step, setStep] = useState<StepPageType>({ currentStep: 0 });
    const [userPreferences, setUserPreferences] = useState<UserPreferences>({
        user: {
            name: '',
            email: '',
            birthDate: undefined
        },
        geolocation: {
            latitude: 0,
            longitude: 0
        },
        pokemonList: []
    });

    return <RegisterContext.Provider value={{ step, setStep, userPreferences, setUserPreferences }}>
        {children}
    </RegisterContext.Provider >
}


type RegisterProviderProps = {
    children: React.ReactNode;
}