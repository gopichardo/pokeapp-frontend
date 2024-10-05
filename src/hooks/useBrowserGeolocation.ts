/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type LocationResponse = {
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  error?: string | null;
};

type UseBrowserGeolocationParams = {
  defaultLatitude?: number;
  defaultLongitude?: number;
  defaultLocationEnabled?: boolean;
};

export const useBrowserGeolocation = (params?: UseBrowserGeolocationParams) => {
  const [locationResponse, setLocationResponse] = useState<LocationResponse>({
    latitude: params?.defaultLatitude,
    longitude: params?.defaultLongitude,
    accuracy: 0,
  });

  const [locationEnabled, setLocationEnabled] = useState<boolean>(
    params?.defaultLocationEnabled ? true : false
  );

  const [geolocationSupported, setGeolocationSupported] = useState(
    !!navigator.geolocation
  );

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos: any) => {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    setLocationEnabled(true);

    setLocationResponse({
      latitude: crd.latitude,
      longitude: crd.longitude,
      accuracy: crd.accuracy,
    });
  };

  const errors = (err: any) => {
    setLocationResponse({
      error: `ERROR(${err.code}): ${err.message}`,
    });
  };

  const queryLocationPermission = () => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      console.log(result);

      if (result.state === "granted") {
        navigator.geolocation.getCurrentPosition(success, errors, options);
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(success, errors, options);
      } else if (result.state === "denied") {
        setLocationResponse({
          error: "Location permission denied",
        });
      }
    });
  };

  const askForGeolocationSupport = () => {
    if (navigator.geolocation) {
      setGeolocationSupported(true);
    } else {
      setGeolocationSupported(false);

      setLocationResponse({
        error: "Geolocation is not supported by this browser.",
      });
    }
  };

  return {
    geolocationSupported,
    locationResponse,
    askForGeolocationSupport,
    queryLocationPermission,
    locationEnabled,
    setLocationEnabled,
  };
};
