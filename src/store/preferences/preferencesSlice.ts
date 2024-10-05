import { createSlice } from "@reduxjs/toolkit";
import { UserPreferencesType } from "../../PokeApp/types/UserPreferences.type";
import { PokemonItemType } from "../../PokeApp/types/PokemonItem.type";
import { UserInformationtype } from "../../PokeApp/types/UserInformation.type";
import { LocationType } from "../../PokeApp/types/Location.type";

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

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
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
  },
});

export const {
  addPokemonItem,
  removePokemonItem,
  setUserInformation,
  setLocation,
} = preferencesSlice.actions;
