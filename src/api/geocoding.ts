import { WEATHER_BASE_URL } from "../config/envrinmoment-config";
import { GeocodingResponse } from "./types/geocoding-response-item.interface";

const OPENWEATHERMAP_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

export const getCityNameFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<string | undefined> => {
  try {
    const response = await fetch(
      `${WEATHER_BASE_URL}?lat=${latitude}&lon=${longitude}&limit=1&appid=${OPENWEATHERMAP_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: GeocodingResponse = await response.json();
    return data[0]?.name; // Return the city name from the first result
  } catch (error) {
    console.error("Error fetching city name:", error);
    return undefined; // Handle errors gracefully
  }
};
