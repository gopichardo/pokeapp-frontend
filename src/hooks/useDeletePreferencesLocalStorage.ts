import { LOCAL_STORAGE_PREFERENCES_KEY } from "../config/envrinmoment-config";

export const deletePreferencesLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_PREFERENCES_KEY);
};
