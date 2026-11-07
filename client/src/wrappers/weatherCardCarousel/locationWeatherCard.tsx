import { WeatherData } from "../../../library/weatherCard/types";
import { WeatherCard } from "../../../library/weatherCard/weatherCard";

interface LocationWeatherCardProps {
  /** undefined while loading, null if the request failed */
  weather: WeatherData | null | undefined;
  name?: string;
  onRemove?: () => void;
}

export function LocationWeatherCard({
  weather,
  name,
  onRemove,
}: LocationWeatherCardProps) {
  if (weather === undefined) {
    return <div className="weather-card-carousel-status">Loading...</div>;
  }

  if (weather === null) {
    return (
      <div className="weather-card-carousel-status">
        <div>
          Could not load {name ?? "your location... try refreshing the page"}
        </div>
        {onRemove && (
          <button type="button" onClick={onRemove}>
            Remove
          </button>
        )}
      </div>
    );
  }

  return <WeatherCard {...weather} onRemove={onRemove} />;
}
