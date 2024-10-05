import { FormControlLabel, Switch } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { LocationCard } from "../../../components/Cards/LocationCard";
import { IRootState, useAppDispatch } from "../../../store/store";
import { IUserStepRef } from "../../types/user-step-ref.interface";
import { useBrowserGeolocation } from "../../../hooks/useBrowserGeolocation";
import { useSelector } from "react-redux";
import { setLocationState } from "../../../store/preferences/thunks";

type LocationStepProps = {
    index: number;
}




export const LocationStep = forwardRef<IUserStepRef, LocationStepProps>((_props, ref) => {
    const dispatch = useAppDispatch();

    const preferences = useSelector((state: IRootState) => state.preferences);
    const { location: { latitude, longitude, locationEnabled: stateLocationEnabled } } = preferences;

    const {
        queryLocationPermission,
        locationResponse,
        askForGeolocationSupport,
        locationEnabled,
        setLocationEnabled
    } = useBrowserGeolocation(
        {
            defaultLatitude: latitude,
            defaultLongitude: longitude,
            defaultLocationEnabled: stateLocationEnabled
        });

    useEffect(() => {
        askForGeolocationSupport();
    }, [locationEnabled])




    const handleOnCheckAllowLocation = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.checked) {
            queryLocationPermission();
        }
        setLocationEnabled(event.target.checked);
    }


    useImperativeHandle(ref, () => {
        return {
            validateStep: () => {
                const { latitude, longitude } = locationResponse;

                dispatch(setLocationState({
                    latitude: latitude as number,
                    longitude: longitude as number,
                    locationEnabled: locationEnabled as boolean
                }))

                return true;
            }
        }
    }
    )

    return (
        <>
            <FormControlLabel label="Allow app to access your location" control={
                <Switch
                    size="medium"
                    value={locationEnabled}
                    checked={locationEnabled}
                    onChange={handleOnCheckAllowLocation}
                    inputProps={{ 'aria-label': 'controlled' }}
                >
                </Switch>
            } >
            </FormControlLabel>
            <LocationCard
                cityName='...'
                latitude={locationResponse?.latitude ?? 0}
                longitude={locationResponse?.longitude ?? 0} />
        </>
    )
})
