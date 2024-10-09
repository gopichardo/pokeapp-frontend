import { createSlice } from "@reduxjs/toolkit";
import { StepPageType } from "../../auth/types/step-page.type";

const initStep = () => {
  const initial: StepPageType = {
    step: 0,
  };

  return initial;
};

export const registerStepSlice = createSlice({
  name: "registerStep",
  initialState: initStep(),
  reducers: {
    setRegisterStep: (
      state,
      action: { payload: StepPageType; type: string }
    ) => {
      state.step = action.payload.step;
    },
  },
});

export const { setRegisterStep } = registerStepSlice.actions;
