import { FormControlLabel, Switch } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import { LocationCard } from "../../../components/Cards/LocationCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { IUserStepRef } from "../../types/user-step-ref.interface";

type LocationStepProps = {
    index: number;
}




export const LocationStep = forwardRef<IUserStepRef, LocationStepProps>((_props, ref) => {
    const preferences = useSelector((state: IRootState) => state.preferences);

    const { location: { latitude, longitude } } = preferences;

    const [allowLocationChecked, setAllowLocationChecked] = useState(false);

    const handleOnCheckAllowLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllowLocationChecked(event.target.checked);

        console.log('checked: ', event.target.checked);
    }


    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {
                return false;
            }
        }
    }
    )

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
})


