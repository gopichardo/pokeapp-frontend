/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  OPENWEATHERMAP_API_KEY,
  WEATHER_BASE_URL,
} from "../config/envrinmoment-config";
import { WeatherData } from "../domain/model/weather.model";
import { WeatherItem, WeatherResponse } from "./dtos/weather-response";

export const getWeatherForecast = async (
  latitude: number,
  longitude: number,
  timeStamp: number
): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherResponse>(
      `${WEATHER_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
    );

    const {
      list,
      city: { name },
    } = response.data;

    const weatherItem = list.find(
      (weatherItem) => weatherItem.dt >= timeStamp
    ) as WeatherItem;

    const {
      main: { temp, temp_min, temp_max, humidity },
      weather: weatherData,
    } = weatherItem;
    
    const { description } = weatherData[0];

    const weather: WeatherData = {
      cityName: name,
      currentTemperature: temp,
      minTemperature: temp_min,
      maxTemperature: temp_max,
      humidity: humidity,
      description: description,
    };

    return weather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
