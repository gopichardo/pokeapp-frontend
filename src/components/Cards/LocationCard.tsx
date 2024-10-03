import { Card, CardHeader, CardMedia, IconButton } from "@mui/material"
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';

export const LocationCard = ({ cityName }: LocationCardProps) => {

    const handleRefreshLocation = () => {
        /**
         * TODO
         * -
         * Handle current location
         */

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
                component="iframe" // Use iframe to embed Google Maps
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.721968728332!2d-99.1580786859021!3d19.43411934592267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8a54023314b%3A0x27f723a90acc5f0!2sAngel%20de%20la%20Independencia%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1680088468848!5m2!1ses-419!2smx" // Replace with your desired Google Maps embed URL
                title="Google Maps"
                sx={{ flexGrow: 1 }}
            />
        </Card>
    )
}

type LocationCardProps = {
    cityName: string;
    latitude: number;
    longitude: number;
}