import { createContext } from "react";
import { UserPreferencesContextType } from "../types/step-context.type";

const init: UserPreferencesContextType = {
    step: { currentStep: 0 },
    setStep: () => { },
    userPreferences: {
        user: {
            name: '',
            email: '',
            birthDate: new Date().toISOString()
        },
        geolocation: {
            latitude: 0,
            longitude: 0
        },
        pokemonList: []
    },
    setUserPreferences: () => { },
};

export const RegisterContext = createContext<UserPreferencesContextType>(init);