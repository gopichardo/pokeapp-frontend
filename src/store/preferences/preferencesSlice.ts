import { createSlice } from "@reduxjs/toolkit";
import { UserPreferencesType } from "../../PokeApp/types/UserPreferences.type";
import { PokemonItemType } from "../../PokeApp/types/PokemonItem.type";
import { UserInformationtype } from "../../PokeApp/types/UserInformation.type";
import { LocationType } from "../../PokeApp/types/Location.type";
import { decodePreferencesBase64 } from "../../utils/base64-util";
import { LOCAL_STORAGE_PREFERENCES_KEY } from "../../config/envrinmoment-config";

const initUserPreferences = () => {
  const initialState: UserPreferencesType = {
    userInformation: {
      name: "",
      email: "",
      birthDate: "",
    },
    location: {
      latitude: 0,
      longitude: 0,
      locationEnabled: false,
    },
    pokemonList: [],
  };

  const storageValue = localStorage.getItem(LOCAL_STORAGE_PREFERENCES_KEY);

  if (!storageValue) return initialState;

  const userPreferences: UserPreferencesType = JSON.parse(
    decodePreferencesBase64(storageValue) || "{}"
  );
  return userPreferences;
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: initUserPreferences(),
  reducers: {
    addPokemonItem: (
      state,
      action: { payload: PokemonItemType; type: string }
    ) => {
      state.pokemonList?.push(action.payload);
    },
    removePokemonItem: (state, action: { payload: string; type: string }) => {
      state.pokemonList = state.pokemonList?.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
    setUserInformation: (
      state,
      action: { payload: UserInformationtype; type: string }
    ) => {
      state.userInformation = action.payload;
    },
    setLocation: (state, action: { payload: LocationType; type: string }) => {
      state.location = action.payload;
    },
    setUserPreferences: (
      state,
      action: { payload: UserPreferencesType; type: string }
    ) => {
      state = { ...state, ...action.payload };
    },
    deleteUserPreferences: (state) => {
      const initialstate = initUserPreferences();

      state.location = initialstate.location;
      state.userInformation = initialstate.userInformation;
      state.pokemonList = initialstate.pokemonList;
    },
  },
});

export const {
  addPokemonItem,
  removePokemonItem,
  setUserInformation,
  setLocation,
  setUserPreferences,
  deleteUserPreferences,
} = preferencesSlice.actions;
