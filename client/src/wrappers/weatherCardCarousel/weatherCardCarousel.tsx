import { useEffect, useState } from "react";
import { WeatherCard } from "../../../library/weatherCard/weatherCard";
import { fetchWeatherCards, WeatherCardData } from "./helpers";
import { WeatherLocation } from "./locations";
import "./weatherCardCarousel.css";

interface WeatherCardCarouselProps {
  locations: WeatherLocation[];
}

export function WeatherCardCarousel({ locations }: WeatherCardCarouselProps) {
  const [weatherCards, setWeatherCards] = useState<WeatherCardData[] | null>(
    null,
  );

  useEffect(() => {
    let ignore = false;

    fetchWeatherCards(locations).then((cards) => {
      if (!ignore) setWeatherCards(cards);
    });

    return () => {
      ignore = true;
    };
  }, [locations]);

  if (!weatherCards) {
    return <div className="weather-card-carousel-status">Loading...</div>;
  }

  const failedCount = locations.length - weatherCards.length;

  return (
    <div>
      {failedCount > 0 && (
        <div className="weather-card-carousel-status">
          Could not load {failedCount} of {locations.length} cities
        </div>
      )}
      <div className="weather-card-carousel">
        {weatherCards.map((card) => (
          <div
            className="weather-card-carousel-item"
            key={`${card.lat} ${card.cityName} ${card.lon}`}
          >
            <WeatherCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
