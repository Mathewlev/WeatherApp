import { useEffect, useState } from "react";
import { WeatherData } from "../../library/weatherCard/types";
import {
  fetchWeather,
  getLocationKey,
} from "../wrappers/weatherCardCarousel/helpers";
import { Coordinates } from "../wrappers/weatherCardCarousel/locations";

// if null it failed
// city: {weather}
type WeatherByLocation = Record<string, WeatherData | null>;

// for individual card
async function fetchWeatherEntry(
  location: Coordinates,
): Promise<[string, WeatherData | null]> {
  // dont throw error here because it would bust the promise.all if one failed
  // this just makes it so if one fails, only that card has the error state
  // and the UI survives. fecthWeather is where we throw error
  const weather = await fetchWeather(location).catch((error) => {
    console.error(error);
    return null;
  });
  return [getLocationKey(location), weather];
}

export function useWeather(locations: Coordinates[]) {
  const [weatherByLocation, setWeatherByLocation] = useState<WeatherByLocation>(
    {},
  );

  useEffect(() => {
    // dont fetch when not needed
    const locationsToFetch = locations.filter(
      (location) => !(getLocationKey(location) in weatherByLocation),
    );

    if (locationsToFetch.length === 0) return;

    Promise.all(locationsToFetch.map(fetchWeatherEntry)).then((entries) => {
      const newWeather: WeatherByLocation = {};

      for (const [key, weather] of entries) {
        newWeather[key] = weather;
      }

      setWeatherByLocation((current) => ({ ...current, ...newWeather }));
    });
  }, [locations]);

  return weatherByLocation;
}
