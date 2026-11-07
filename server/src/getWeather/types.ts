export interface OpenWeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
}

export interface WeatherData {
  cityName: string;
  temperature: number;
  feelsLike: number;
  temperatureHigh: number;
  temperatureLow: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}
