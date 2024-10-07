export interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface WeatherItem {
  dt: number;
  main: WeatherItemInfo;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
  rain?: Rain;
}

export interface Clouds {
  all: number;
}

export interface WeatherItemInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Rain {
  "3h": number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id: number;
  main: MainEnum;
  description: string;
  icon: string;
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
