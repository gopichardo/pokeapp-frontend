import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { GOOGLE_MAPS_API_KEY } from "../../config/envrinmoment-config"
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

type WaetherCardProps = {
    cityName: string;
    latitude: number;
    longitude: number;
    description: string;
    currentTemperature: number;
    maxTemperature: number;
    minTemperature: number;
    humidity: number;
}

export const WaetherCard = ({
    latitude,
    longitude,
    maxTemperature,
    minTemperature,
    currentTemperature,
    humidity,
    description }: WaetherCardProps) => {

    return (
        <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardHeader
                avatar={
                    <Avatar variant="circular" sx={{ backgroundColor: 'primary.main' }} >
                        <DeviceThermostatOutlinedIcon />
                    </Avatar>
                }
                title={

                    <Typography variant="h4" component="h2">
                        {currentTemperature}
                        ºC
                    </Typography>
                }
            />
            <CardMedia
                component="iframe"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}`}
                title="Map"
                sx={{ flexGrow: 1, height: '30vh' }}
            />
            <CardContent>
                <Typography variant="h6">
                    Temperature
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle1" >
                        Min:
                    </Typography>
                    {minTemperature}
                    Cº
                    <Typography paddingLeft={1} variant="subtitle1" >
                        Max:
                    </Typography>
                    <Typography >
                        {maxTemperature}
                    </Typography>
                    Cº
                </Box>
                <Typography variant="h6">
                    Description
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography variant="h6">
                    Humidity
                </Typography>
                <Typography>
                    {humidity}
                </Typography>
            </CardContent>
        </Card>
    )
}
