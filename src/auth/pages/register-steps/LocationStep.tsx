import { FormControlLabel, Switch } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { IRootState, useAppDispatch } from "../../../store/store";
import { IUserStepRef } from "../../types/user-step-ref.interface";
import { useBrowserGeolocation } from "../../../hooks/useBrowserGeolocation";
import { useSelector } from "react-redux";
import { setLocationState } from "../../../store/preferences/thunks";
import { WaetherCard } from "../../../PokeApp/components/WaetherCard";

export const LocationStep = forwardRef<IUserStepRef, unknown>((_, ref) => {
    const dispatch = useAppDispatch();

    const preferences = useSelector((state: IRootState) => state.preferences);
    const { location: { latitude: stateLatitude, longitude: stateLongitude, locationEnabled: stateLocationEnabled } } = preferences;

    const {
        queryLocationPermission,
        locationResponse: { latitude, longitude },
        askForGeolocationSupport,
        locationEnabled,
        setLocationEnabled,
        weather: {
            description,
            humidity,
            cityName,
            currentTemperature,
            minTemperature,
            maxTemperature
        },
    } = useBrowserGeolocation(
        {
            defaultLatitude: stateLatitude,
            defaultLongitude: stateLongitude,
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
            <FormControlLabel label="Allow get location to show weather" control={
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
            {
                locationEnabled &&
                <WaetherCard
                    cityName={cityName}
                    latitude={latitude as number}
                    longitude={longitude as number}
                    description={description}
                    currentTemperature={currentTemperature}
                    minTemperature={minTemperature}
                    maxTemperature={maxTemperature}
                    humidity={humidity}
                />
            }
        </>
    )
})
