import { Colors } from "../library/colors";
import { Header } from "../library/header/header";
import { Icon } from "../library/icon/icon";
import SunSmile from "../library/svgs/sun_smile.svg?react";
import { LOCATIONS } from "./wrappers/weatherCardCarousel/locations";
import { WeatherCardCarousel } from "./wrappers/weatherCardCarousel/weatherCardCarousel";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="container" style={{}}>
        <div className="header">
          <Header text={"Weather Today"} level={1}></Header>
          <Icon icon={SunSmile} size="xl" />
        </div>
        <div className="add-city-container">
          <select className="add-city-select" defaultValue="" aria-label="Add City">
            <option value="" disabled>
              Add City
            </option>
            {LOCATIONS.map((location) => (
              <option key={location.name} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="add-city-button"
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
          <WeatherCardCarousel locations={LOCATIONS} />
        </div>
      </div>
    </main>
  );
}
