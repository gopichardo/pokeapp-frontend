import { configureStore } from "@reduxjs/toolkit";
import { preferencesSlice } from "./preferences/preferencesSlice";
import { useDispatch } from "react-redux";
import { UserPreferencesType } from "../PokeApp/types/UserPreferences.type";
import { registerStepSlice } from "./registerStep/registerStepSlice";
import { StepPageType } from "../auth/types/step-page.type";

export interface IRootState {
  preferences: UserPreferencesType;
  registerStep: StepPageType;
}

export const store = configureStore<IRootState>({
  reducer: {
    preferences: preferencesSlice.reducer,
    registerStep: registerStepSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
