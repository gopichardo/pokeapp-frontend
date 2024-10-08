import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export const FinalStep = () => {
    const navigate = useNavigate();

    const preferences = useSelector((state: IRootState) => state.preferences);


    return (
        <>
            <h2>Thank you {preferences.userInformation?.name}!</h2>
            <p>Now you can go to the home page</p>
            <code>
                {JSON.stringify(preferences, null, 2)}
            </code>
            <Button variant="contained" onClick={() => navigate('/home')} >Go Home</Button>
        </>
    )
}
