import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from "luxon";
import { IRootState, useAppDispatch } from "../../../store/store";
import { forwardRef, useImperativeHandle, useState } from "react";
import { setUserInformation } from "../../../store/preferences/preferencesSlice";
import { useForm } from "../../../hooks/useForm";
import { useSelector } from "react-redux";


type UserStepProps = {
    index: number;
}

export interface UserStepRef {
    validateStep: () => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserStep = forwardRef<UserStepRef, UserStepProps>(({ index }, ref) => {

    const preferences = useSelector((state: IRootState) => state.preferences);

    const { userInformation } = preferences;

    const [formSubmitted, setFormSubmitted] = useState(false);

    const formValidations = {
        name: [(value: string) => value.length > 0, 'Name is required'],
        email: [(value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }, 'A valid Email is required'],
    };

    const formData = {
        ...userInformation
    };

    const {
        email,
        emailValid,
        name,
        nameValid,
        isFormValid,
        onInputChange
    } = useForm(formData, formValidations);

    const dispatch = useAppDispatch();

    const [birthDateValid, setBirthDateValid] = useState<string | null>(DateTime.fromISO(userInformation.birthDate).isValid ? null : 'A valid date is required');
    const [birthDate, setBirthDate] = useState<DateTime>(DateTime.fromISO(userInformation.birthDate));

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const validateStep = (): boolean => {
        const validStep = isFormValid && birthDateValid === null;

        if (validStep) {
            dispatch(setUserInformation({
                name,
                email,
                birthDate: birthDate?.toISO() ?? ''
            }));
        }
        return validStep;
    }

    const validateDate = (date: string): void => {

        const valid = DateTime.fromISO(date).isValid;

        if (!valid) {
            setBirthDateValid('A valid date is required');
        }

        const difference = DateTime.now()
            .diff(DateTime.fromISO(date)).as('years');
        if (difference < 12) {
            setBirthDateValid('You must be at least 12 years old');
        }
        else {
            setBirthDateValid(null);
        }
    }

    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {
                const isValid = validateStep();
                setFormSubmitted(true);

                return isValid;
            }
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <TextField
                label="Name"
                fullWidth
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={onInputChange}
                error={!!nameValid && formSubmitted}
                helperText={formSubmitted ? nameValid : null}
            />
            <TextField
                sx={{ mt: 2 }}
                label="Email"
                fullWidth
                name="email"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid : null}
            />
            <Box sx={{ mt: 2, }} width={1}>
                <LocalizationProvider dateAdapter={AdapterLuxon}>
                    <DatePicker
                        className="date-picker"
                        label="Birthdate"
                        name="birthdate"
                        format="dd/MM/yyyy"
                        value={birthDate}
                        maxDate={DateTime.now()}
                        minDate={DateTime.now().minus({ years: 100 })}
                        onError={(error) => {
                            if (error) {
                                setBirthDateValid('A valid date is required');
                            }
                        }}
                        onAccept={(value) => {
                            // setFormSubmitted(true);
                            setBirthDate(DateTime.fromISO(value?.toString() ?? ''));
                            validateDate(value?.toISO() ?? '')

                        }}
                        onChange={
                            (value) => {
                                setBirthDate(DateTime.fromISO(value?.toString() ?? ''));
                                validateDate(value?.toISO() ?? '')
                            }
                        }
                        slotProps={{
                            textField: {
                                error: !!birthDateValid && formSubmitted,
                                helperText: formSubmitted ? birthDateValid : null
                            }
                        }}
                    />
                </LocalizationProvider>
            </Box>
        </form >
    )
})