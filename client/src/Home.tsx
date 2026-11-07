import { useState } from "react";
import { Colors } from "../library/colors";
import { Header } from "../library/header/header";
import { Icon } from "../library/icon/icon";
import SunSmile from "../library/svgs/sun_smile.svg?react";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
import { useSavedCities } from "./hooks/useSavedCities";
import { LOCATIONS } from "./wrappers/weatherCardCarousel/locations";
import { WeatherCardCarousel } from "./wrappers/weatherCardCarousel/weatherCardCarousel";
import "./Home.css";

export default function Home() {
  const { currentLocation, isLocating } = useCurrentLocation();
  // For cards state
  const { savedCities, addCity, removeCity } = useSavedCities();
  // For dropdown state
  const [cityToAdd, setCityToAdd] = useState("");

  const availableCities = LOCATIONS.filter(
    (location) => !savedCities.includes(location),
  );

  function handleAddCity() {
    const city = LOCATIONS.find((location) => location.name === cityToAdd);

    if (city) {
      addCity(city);
      setCityToAdd("");
    }
  }

  return (
    <main>
      <div className="container" style={{}}>
        <div className="header">
          <Header text={"Weather Today"} level={1}></Header>
          <Icon icon={SunSmile} size="xl" />
        </div>
        <div className="add-city-container">
          <select
            className="add-city-select"
            value={cityToAdd}
            onChange={(event) => setCityToAdd(event.target.value)}
            aria-label="Add City"
          >
            <option value="" disabled>
              Add City
            </option>
            {availableCities.map((location) => (
              <option key={location.name} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="add-city-button"
            onClick={handleAddCity}
            disabled={!cityToAdd}
            style={{
              backgroundColor: Colors.successGreen,
              color: Colors.white,
            }}
          >
            +
          </button>
        </div>
        <div className="carousel-container">
          <Header text={"My Cities"} className="carousel-header"></Header>
          <WeatherCardCarousel
            currentLocation={currentLocation}
            isLocating={isLocating}
            savedCities={savedCities}
            onRemoveCity={removeCity}
          />
        </div>
      </div>
    </main>
  );
}
