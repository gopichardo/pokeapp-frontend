import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { LocationCard } from "../../../components/Cards/LocationCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";

export const LocationStep = () => {
    const preferences = useSelector((state: IRootState) => state.preferences);

    const { location: { latitude, longitude } } = preferences;

    const [allowLocationChecked, setAllowLocationChecked] = useState(false);

    const handleOnCheckAllowLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllowLocationChecked(event.target.checked);

        console.log('checked: ', event.target.checked);
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
                latitude={latitude}
                longitude={longitude} />
        </>
    )
}
