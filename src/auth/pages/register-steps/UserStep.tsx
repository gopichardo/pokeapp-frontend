import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from "luxon";
import { useAppDispatch } from "../../../store/store";
import { forwardRef, useImperativeHandle, useState } from "react";
import { setUserInformation } from "../../../store/preferences/preferencesSlice";
import { useForm } from "../../../hooks/useForm";


type UserStepProps = {
    index: number;
}

export interface UserStepRef {
    validateStep: () => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserStep = forwardRef<UserStepRef, UserStepProps>(({ index }, ref) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const formValidations = {
        name: [(value: string) => value.length > 0, 'Name is required'],
        email: [(value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }, 'A valid Email is required'],
        birthDate: [(value: string) => DateTime.fromISO(value).isValid, 'Enter a valid date']
    };

    const formData = {
        name: '',
        email: '',
        birthDate: undefined
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

    const [birthDateValid, setBirthDateValid] = useState('');
    const [birthDate, setBirthDate] = useState<DateTime>();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;
    }

    const validateStep = (): boolean => {
        if (isFormValid) {
            dispatch(setUserInformation({
                name,
                email,
                birthDate: birthDate?.toISO() ?? ''
            }));
        }

        return isFormValid;
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
                        // value={birthDate}
                        maxDate={DateTime.now()}
                        minDate={DateTime.now().minus({ years: 100 })}
                        onError={(error) => {
                            console.log("on error");
                            setBirthDateValid(error?.toString() ?? '');
                        }}
                        onAccept={(value) => {
                            console.log("on accept");
                            setBirthDate(DateTime.fromISO(value?.toString() ?? ''));
                            setBirthDateValid('');
                            setFormSubmitted(true);
                        }}
                    />
                </LocalizationProvider>
                {!!birthDateValid && formSubmitted}
                <Typography variant="caption" color="error" marginLeft="14px">
                    {formSubmitted ? birthDateValid : null}
                </Typography>
            </Box>
        </form>
    )
})