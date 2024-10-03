import { Dispatch } from "@reduxjs/toolkit";
import { LocationType } from "../../PokeApp/types/Location.type";
import { PokemonItemType } from "../../PokeApp/types/PokemonItem.type";
import { UserInformationtype } from "../../PokeApp/types/UserInformation.type";
import {
  addPokemonItem,
  removePokemonItem,
  setLocation,
  setUserInformation,
} from "./preferencesSlice";

export const selectPokemonItem = (pokemon: PokemonItemType) => {
  return async (dispatch: Dispatch) => {
    dispatch(addPokemonItem(pokemon));
  };
};

export const unselectPokemonItem = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(removePokemonItem(name));
  };
};

export const setUser = (userInformation: UserInformationtype) => {
  return async (dispatch: Dispatch) => {
    dispatch(setUserInformation(userInformation));
  };
};

export const setLocationState = (location: LocationType) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLocation(location));
  };
};