import { Box, Button, FormHelperText, TextField } from "@mui/material"
import { RegisterUserLayout } from "../../PokeApp/layout/RegisterUserLayout"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import './RegisterUserPage.css'

export const RegisterUserPage = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <RegisterUserLayout title="User Information">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    placeholder="John Doe"
                    onChange={() => { }}
                    helperText={"Validation"}
                />
                <TextField
                    sx={{ mt: 2 }}
                    label="Email"
                    fullWidth
                    name="email"
                    onChange={() => { }}
                    helperText={"Validation"}
                    placeholder="john.doe@gmail.com"
                />
                <Box sx={{ mt: 2, }} width={1}>
                    <LocalizationProvider dateAdapter={AdapterLuxon}>
                        <DatePicker
                            className="date-picker"
                            label="Birthdate"
                            name="birthdate"
                            onChange={() => { }}
                            format="dd/MM/yyyy"
                        />
                        <FormHelperText></FormHelperText>
                    </LocalizationProvider>
                </Box>
                <Button
                    sx={{ mt: 2 }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    endIcon={<NavigateNextIcon />}
                >
                    Continue
                </Button>

            </form>
        </RegisterUserLayout >
    )
}
