import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from "luxon";
import { IRootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { forwardRef, useImperativeHandle, useState } from "react";
import { UserInformationtype } from "../../../PokeApp/types/UserInformation.type";
import { setUserInformation } from "../../../store/preferences/preferencesSlice";


type UserStepProps = {
    index: number;
}

export interface UserStepRef {
    validateStep: () => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserStep = forwardRef<UserStepRef, UserStepProps>(({ index }, ref) => {
    const dispatch = useAppDispatch();

    const preferences = useSelector((state: IRootState) => state.preferences);
    const storeUserInformation = preferences.userInformation;



    const [userInfo, setUserInfo] = useState<UserInformationtype>({ ...storeUserInformation });
    const { name, email, birthDate } = userInfo;
    const dateObject = birthDate ? DateTime.fromISO(birthDate) : undefined;

    const onchangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            name: event.target.value.trim()
        });
    }
    const onchangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            email: event.target.value.trim()
        });
    }

    const onChangeBirthDate = (newValue: DateTime<true> | DateTime<false> | null) => {
        setUserInfo({
            ...userInfo,
            birthDate: newValue?.toISO() ?? ''
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit user form');
    }

    const validateStep = (): boolean => {
        const allValid = name.length > 0 && email.length > 0;

        console.log('isValidStep step?', allValid);

        if (allValid) {
            dispatch(setUserInformation({
                name: userInfo.name,
                email: userInfo.email,
                birthDate: userInfo.birthDate
            }));
        }
        return allValid;
    }

    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {
                const isValid = validateStep();

                return isValid;
            }
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                fullWidth
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={onchangeName}
                helperText={"Validation"}
            />
            <TextField
                sx={{ mt: 2 }}
                label="Email"
                fullWidth
                name="email"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={onchangeEmail}
                helperText={"Validation"}
            />
            <Box sx={{ mt: 2, }} width={1}>
                <LocalizationProvider dateAdapter={AdapterLuxon}>
                    <DatePicker
                        className="date-picker"
                        label="Birthdate"
                        name="birthdate"
                        format="dd/MM/yyyy"
                        value={dateObject}
                        onChange={(newValue) => onChangeBirthDate(newValue)}
                    />
                </LocalizationProvider>
            </Box>
        </form>
    )
})