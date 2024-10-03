import { configureStore } from "@reduxjs/toolkit";
import { preferencesSlice } from "./preferences/preferencesSlice";
import { useDispatch } from "react-redux";
import { UserPreferencesType } from "../PokeApp/types/UserPreferences.type";

export interface IRootState {
  preferences: UserPreferencesType;
}

export const store = configureStore<IRootState>({
  reducer: {
    preferences: preferencesSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
