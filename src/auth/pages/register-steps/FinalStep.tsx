import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";

export const FinalStep = () => {

    const preferences = useSelector((state: IRootState) => state.preferences);


    return (
        <>
            <h2>Thank you {preferences.userInformation?.name}!</h2>
            <p>Now you can go to the home page</p>
            <code>
                {JSON.stringify(preferences, null, 2)}
            </code>
            <Button variant="contained" onClick={() => window.location.href = '/home'} >Go Home</Button>
        </>
    )
}
