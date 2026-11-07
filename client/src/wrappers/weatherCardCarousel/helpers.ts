import { WeatherData } from "../../../library/weatherCard/types";
import { Coordinates } from "./locations";

export async function fetchWeather({
  lat,
  lon,
}: Coordinates): Promise<WeatherData> {
  const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  return (await response.json()) as WeatherData;
}

export function getLocationKey({ lat, lon }: Coordinates) {
  return `${lat},${lon}`;
}
