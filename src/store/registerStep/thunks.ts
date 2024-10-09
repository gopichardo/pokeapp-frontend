import { Dispatch } from "@reduxjs/toolkit";
import { setRegisterStep } from "./registerStepSlice";

export const setNewStep = (newStep: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setRegisterStep({ step: newStep }));
  };
};
