import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../store/store";
import { setPreferences } from "../store/preferences/thunks";
import { UserPreferencesType } from "../PokeApp/types/UserPreferences.type";

const LOCAL_STORAGE_PREFERENCES_KEY = "userPreferences";

export const useUserPreferences = () => {
  const dispatch = useAppDispatch();
  const preferences = useSelector((state: IRootState) => state.preferences);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_PREFERENCES_KEY,
      JSON.stringify(preferences)
    );
  }, [preferences]);

  const initUserPreferences = () => {
    const storageValue = localStorage.getItem(LOCAL_STORAGE_PREFERENCES_KEY);

    const userPreferences: UserPreferencesType = JSON.parse(
      storageValue || "{}"
    );

    dispatch(setPreferences(userPreferences));
  };

  return { preferences, initUserPreferences };
};
