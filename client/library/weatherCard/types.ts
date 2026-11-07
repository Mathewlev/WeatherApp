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

export interface WeatherCardProps extends WeatherData {
  onRemove?: () => void;
}
