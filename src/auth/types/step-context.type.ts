import { UserPreferences } from "../../domain/model/user-preferences.model";
import { StepPageType } from "./step-page.type";

export type UserPreferencesContextType = {
  step: StepPageType;
  setStep: (step: StepPageType) => void;
  userPreferences: UserPreferences;
  setUserPreferences: (userPreferences: UserPreferences) => void;
};
