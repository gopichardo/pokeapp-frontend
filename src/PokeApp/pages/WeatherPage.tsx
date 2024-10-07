import { useSelector } from "react-redux";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { WaetherCard } from "../components/WaetherCard"
import { PokeAppLayout } from "../layout/PokeAppLayout"
import { IRootState } from "../../store/store";
import { WeatherData } from "../../domain/model/weather.model";
import { Typography } from "@mui/material";

export const WeatherPage = () => {

  const {
    latitude: storeLatitude,
    longitude: storeLongitude
  } = useSelector((state: IRootState) => state.preferences.location);

  const { weather } = useFetchWeather({ latitude: storeLatitude, longitude: storeLongitude });


  const {
    description,
    humidity,
    cityName,
    currentTemperature,
    minTemperature,
    maxTemperature } = weather as WeatherData;


  return (
    <PokeAppLayout >
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        This is tomorrow's weather at {cityName}
      </Typography>
      <WaetherCard
        cityName={cityName}
        latitude={storeLatitude}
        longitude={storeLongitude}
        description={description}
        currentTemperature={currentTemperature}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        humidity={humidity}
      />
    </PokeAppLayout>

  )
}
