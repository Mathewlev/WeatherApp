import express from "express";
import { getWeather } from "./getWeather/getWeather.js";

const app = express();
const port = process.env.PORT ?? 3001;

app.get("/api/weather", async (req, res) => {
  const { lat, lon } = req.query;
  const latitude = Number(lat);
  const longitude = Number(lon);

  if (!lat || !lon) {
    res.status(400).json({ error: "lat and lon are required numbers" });
    return;
  }

  try {
    res.json(await getWeather(latitude, longitude));
  } catch (error) {
    res.status(502).json({ error: "Could not reach the weather service" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
