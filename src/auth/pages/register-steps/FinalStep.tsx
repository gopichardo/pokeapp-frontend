import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import { Button } from "@mui/material";


export const FinalStep = () => {
    const { userPreferences } = useContext(RegisterContext);

    const { user: { name } } = userPreferences;


    return (
        <>
            <h2>Thank you {name}!</h2>
            <p>Now you can go to the home page</p>
            <Button variant="contained">Go Home</Button>
        </>
    )
}
