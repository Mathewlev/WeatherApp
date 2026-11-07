const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(lat: number, lon: number): Promise<any> {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    throw new Error("No API Key");
  }

  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    units: "imperial",
    appid: apiKey,
  });

  const response = await fetch(`${WEATHER_URL}?${params}`);
  const data = (await response.json()) as { message?: string };

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  return data;
}
