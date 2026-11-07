import { Colors } from "../colors";
import { Header } from "../header/header";
import { WeatherCardProps } from "./types";
import "./weatherCard.css";

export function WeatherCard({
  cityName,
  temperature,
  feelsLike,
  temperatureHigh,
  temperatureLow,
  description,
  icon,
  humidity,
  windSpeed,
}: WeatherCardProps) {
  const labelStyle = { color: Colors.textGray };

  return (
    <div
      className="weather-card-container"
      style={{ borderColor: Colors.borderGray }}
    >
      <Header text={cityName} className="weather-card-city" />
      <div className="weather-card-general">
        <img src={icon} width={72} height={72} />
        <div>
          <div className="weather-card-temperature-container">
            <div
              className="weather-card-temperature"
              style={{ color: Colors.primaryBlue }}
            >
              {Math.round(temperature)}°
            </div>
            <div className="weather-card-feels-like" style={labelStyle}>
              (Feels like {Math.round(feelsLike)}°)
            </div>
          </div>
          <div className="weather-card-description">{description}</div>
        </div>
      </div>

      <div
        className="weather-card-details"
        style={{ borderTopColor: Colors.borderGray }}
      >
        <div>
          <div className="weather-card-detail-header" style={labelStyle}>
            High
          </div>
          <div className="weather-card-detail-value">
            {Math.round(temperatureHigh)}°
          </div>
        </div>
        <div>
          <div className="weather-card-detail-header" style={labelStyle}>
            Low
          </div>
          <div className="weather-card-detail-value">
            {Math.round(temperatureLow)}°
          </div>
        </div>
        <div>
          <div className="weather-card-detail-header" style={labelStyle}>
            Humidity
          </div>
          <div className="weather-card-detail-value">{humidity}%</div>
        </div>
        <div>
          <div className="weather-card-detail-header" style={labelStyle}>
            Wind
          </div>
          <div className="weather-card-detail-value">
            {Math.round(windSpeed)} mph
          </div>
        </div>
      </div>
    </div>
  );
}
