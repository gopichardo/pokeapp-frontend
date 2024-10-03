import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { LocationCard } from "../../../components/Cards/LocationCard";

export const LocationStep = () => {
    const [allowLocationChecked, setAllowLocationChecked] = useState(false);

    const handleOnCheckAllowLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllowLocationChecked(event.target.checked);
    }

    return (
        <>
            <FormControlLabel label="Allow app to access your location" control={
                <Switch
                    size="medium"
                    checked={allowLocationChecked}
                    onChange={handleOnCheckAllowLocation}
                    inputProps={{ 'aria-label': 'controlled' }}
                >
                </Switch>
            } >
            </FormControlLabel>
            <LocationCard
                cityName="Mexico City"
                latitude={19.43411934592267}
                longitude={-99.1580786859021} />
        </>
    )
}
