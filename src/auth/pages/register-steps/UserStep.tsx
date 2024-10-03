import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from "luxon";
import { IRootState, useAppDispatch } from "../../../store/store";
import { setUser } from "../../../store/preferences/thunks";
import { useSelector } from "react-redux";
import { UserInformationtype } from "../../../PokeApp/types/UserInformation.type";


export const UserStep = () => {
    const dispatch = useAppDispatch();

    const preferences = useSelector((state: IRootState) => state.preferences);

    const { name, email, birthDate } = preferences.userInformation as UserInformationtype;

    const dateObject = birthDate ? DateTime.fromISO(birthDate) : undefined;


    const onchangeName = (event: React.ChangeEvent<HTMLInputElement>) => {

        dispatch(setUser({ name: event.target.value, email, birthDate }));
    }
    const onchangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {

        dispatch(setUser({ name, email: event.target.value, birthDate }));
    }

    const onChangeBirthDate = (newValue: DateTime<true> | DateTime<false> | null) => {

        dispatch(setUser({ name, email, birthDate: newValue?.toISO() || '' }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

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
}
