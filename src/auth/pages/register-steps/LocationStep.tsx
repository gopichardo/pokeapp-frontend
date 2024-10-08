import { FormControlLabel, Switch } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { IRootState, useAppDispatch } from "../../../store/store";
import { IUserStepRef } from "../../types/user-step-ref.interface";
import { useBrowserGeolocation } from "../../../hooks/useBrowserGeolocation";
import { useSelector } from "react-redux";
import { setLocationState } from "../../../store/preferences/thunks";
import { WaetherCard } from "../../../PokeApp/components/WaetherCard";
import { useFetchWeather } from "../../../hooks/useFetchWeather";
import { WeatherData } from "../../../domain/model/weather.model";

export const LocationStep = forwardRef<IUserStepRef, unknown>((_, ref) => {
    const dispatch = useAppDispatch();

    const preferences = useSelector((state: IRootState) => state.preferences);
    const { location: { latitude, longitude, locationEnabled: stateLocationEnabled } } = preferences;

    const { weather } = useFetchWeather({ latitude, longitude });

    const {
        description,
        humidity,
        cityName,
        currentTemperature,
        minTemperature,
        maxTemperature } = weather as WeatherData;

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
                    latitude={latitude}
                    longitude={longitude}
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
