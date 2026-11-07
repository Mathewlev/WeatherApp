export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherLocation extends Coordinates {
  name: string;
}

export const LOCATIONS: WeatherLocation[] = [
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { name: "Austin", lat: 30.2672, lon: -97.7431 },
  { name: "Socorro", lat: 38.7223, lon: -9.1393 },
  { name: "Auckland", lat: -36.8509, lon: 174.7645 },
  { name: "Atlanta", lat: 33.749, lon: -84.388 },
];
