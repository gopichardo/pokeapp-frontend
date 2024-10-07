import { useEffect, useState } from "react";
import { getWeatherForecast } from "../api/weather-api";
import { WeatherData } from "../domain/model/weather.model";
import { DateTime } from "luxon";


type UseFetchWeatherParams = {
    latitude: number;
    longitude: number;
}

export const useFetchWeather = ({ latitude, longitude }: UseFetchWeatherParams) => {

    const [weather, setWeather] = useState<WeatherData>({
        cityName: '',
        description: '',
        currentTemperature: 0,
        minTemperature: 0,
        maxTemperature: 0,
        humidity: 0
    });

    useEffect(() => {
        const fetchWeather = async () => {
            const todayUnix = DateTime.now().toUnixInteger();
            const weatherInfo = await getWeatherForecast(latitude, longitude, todayUnix);

            setWeather(weatherInfo)
        }

        fetchWeather();

    }, [latitude, longitude]);


    return { weather };
}
