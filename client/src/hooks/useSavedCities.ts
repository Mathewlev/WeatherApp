import { useEffect, useState } from "react";
import {
  LOCATIONS,
  WeatherLocation,
} from "../wrappers/weatherCardCarousel/locations";

const STORAGE_KEY = "savedCities";

function loadSavedCities(): WeatherLocation[] {
  try {
    const savedNames: string[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]",
    );

    return savedNames
      .map((name) => LOCATIONS.find((location) => location.name === name))
      .filter((city) => city !== undefined);
  } catch {
    return [];
  }
}

export function useSavedCities() {
  const [savedCities, setSavedCities] = useState(loadSavedCities);

  useEffect(() => {
    const names = savedCities.map((city) => city.name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
  }, [savedCities]);

  function addCity(city: WeatherLocation) {
    setSavedCities((cities) => [...cities, city]);
  }

  function removeCity(cityName: string) {
    setSavedCities((cities) => cities.filter((city) => city.name !== cityName));
  }

  return { savedCities, addCity, removeCity };
}
