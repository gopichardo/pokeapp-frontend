/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm: any, formValidations: any = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  const isFormValid = useMemo(() => {
    const isValid = Object.entries(formValidation).find(
      ([, val]) => val != null
    )
      ? false
      : true;

    return isValid;
  }, [formValidation]);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: any = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
