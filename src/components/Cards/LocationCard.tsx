import { Card, CardHeader, CardMedia, IconButton } from "@mui/material"
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useBrowserGeolocation } from "../../hooks/useBrowserGeolocation";
import { useEffect, useState } from "react";
import { getCityNameFromCoordinates } from "../../api/geocoding";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const LocationCard = ({ cityName: initialCityName = 'City', latitude, longitude }: LocationCardProps) => {

    const { queryLocationPermission } = useBrowserGeolocation();

    const [cityName, setCityName] = useState<string | undefined>(initialCityName);

    useEffect(() => {
        const fetchCityName = async () => {
            if (latitude && longitude) {
                const fetchedCityName = await getCityNameFromCoordinates(latitude, longitude);
                setCityName(fetchedCityName);
            }
        };

        fetchCityName();
    }, [latitude, longitude]);


    const handleRefreshLocation = () => {
        queryLocationPermission();
    }

    return (
        <Card sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <CardHeader
                title={cityName}
                action={
                    <IconButton
                        size="large"
                        color="secondary" aria-label="location"
                        onClick={handleRefreshLocation}
                    ><MyLocationOutlinedIcon />
                    </IconButton>} />
            <CardMedia
                component="iframe"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}`}
                title="Map"
                sx={{ flexGrow: 1 }}
            />
        </Card>
    )
}

type LocationCardProps = {
    cityName: string;
    latitude?: number;
    longitude?: number;
}