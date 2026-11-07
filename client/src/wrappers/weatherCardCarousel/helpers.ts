import { WeatherCardProps } from "../../../library/weatherCard/types";
import { WeatherLocation } from "./locations";

// need this for the key
export interface WeatherCardData extends WeatherCardProps {
  lat: number;
  lon: number;
}

async function fetchWeather({
  name,
  lat,
  lon,
}: WeatherLocation): Promise<WeatherCardData> {
  const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  const weather = (await response.json()) as WeatherCardProps;

  return { ...weather, cityName: name, lat, lon };
}

export async function fetchWeatherCards(
  locations: WeatherLocation[],
): Promise<WeatherCardData[]> {
  const results = await Promise.allSettled(
    locations.map((location) => fetchWeather(location)),
  );

  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
}
