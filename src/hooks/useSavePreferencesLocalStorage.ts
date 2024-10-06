import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { useEffect } from "react";
import { encodePreferencesBase64 } from "../utils/base64-util";

export const LOCAL_STORAGE_PREFERENCES_KEY = "userPreferences";

export const useSavePreferencesLocalStorage = () => {
  const preferences = useSelector((state: IRootState) => state.preferences);
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_PREFERENCES_KEY,
      encodePreferencesBase64(JSON.stringify(preferences))
    );
  }, [preferences]);

  return {};
};
