import { useMemo } from "react";
import { useWeather } from "../../hooks/useWeather";
import { getLocationKey } from "./helpers";
import { LocationWeatherCard } from "./locationWeatherCard";
import { Coordinates, WeatherLocation } from "./locations";
import "./weatherCardCarousel.css";

interface WeatherCardCarouselProps {
  currentLocation: Coordinates | null;
  isLocating: boolean;
  savedCities: WeatherLocation[];
  onRemoveCity: (cityName: string) => void;
}

export function WeatherCardCarousel({
  currentLocation,
  isLocating,
  savedCities,
  onRemoveCity,
}: WeatherCardCarouselProps) {
  // Nothing is fetched until the user location is known, so all the cards load together.
  // If user has location blocked, they can still add other cites.
  const locationsToLoad = useMemo(() => {
    if (isLocating) return [];

    return currentLocation ? [currentLocation, ...savedCities] : savedCities;
  }, [currentLocation, isLocating, savedCities]);

  const weatherByLocation = useWeather(locationsToLoad);
  const isFirstLoad =
    locationsToLoad.length > 0 && Object.keys(weatherByLocation).length === 0;

  if (isLocating || isFirstLoad) {
    return <div className="weather-card-carousel-status">Loading...</div>;
  }

  return (
    <div className="weather-card-carousel">
      {currentLocation && (
        <div className="weather-card-carousel-item">
          <LocationWeatherCard
            weather={weatherByLocation[getLocationKey(currentLocation)]}
          />
        </div>
      )}
      {savedCities.map((city) => (
        <div className="weather-card-carousel-item" key={city.name}>
          <LocationWeatherCard
            weather={weatherByLocation[getLocationKey(city)]}
            name={city.name}
            onRemove={() => onRemoveCity(city.name)}
          />
        </div>
      ))}
    </div>
  );
}
