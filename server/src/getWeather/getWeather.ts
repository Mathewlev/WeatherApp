import type { OpenWeatherResponse, WeatherData } from "./types.js";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const ICON_URL = "https://openweathermap.org/img/wn";

export async function getWeather(
  lat: number,
  lon: number,
): Promise<WeatherData> {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    throw new Error("No API Key");
  }

  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    units: "imperial",
    appid: apiKey,
  });

  const response = await fetch(`${WEATHER_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  const data = (await response.json()) as OpenWeatherResponse;
  const [condition] = data.weather;

  return {
    cityName: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    temperatureHigh: data.main.temp_max,
    temperatureLow: data.main.temp_min,
    description: condition.description,
    icon: `${ICON_URL}/${condition.icon}@2x.png`,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}
