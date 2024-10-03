import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import { DateTime } from "luxon";


export const UserStep = () => {

    const { userPreferences, setUserPreferences } = useContext(RegisterContext);

    const { user: { name, email, birthDate }, geolocation, pokemonList } = userPreferences;

    const dateObject = birthDate ? DateTime.fromISO(birthDate) : undefined;



    const onchangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPreferences({
            user: {
                name: event.target.value,
                email,
                birthDate
            },
            geolocation,
            pokemonList
        });
    }
    const onchangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPreferences({
            user: {
                name,
                email: event.target.value,
                birthDate
            },
            geolocation,
            pokemonList
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChangeBirthDate = (newValue: DateTime<true> | DateTime<false> | null) => {
        setUserPreferences({
            user: {
                name,
                email,
                birthDate: newValue?.toISO() || ''
            },
            geolocation,
            pokemonList
        });

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
