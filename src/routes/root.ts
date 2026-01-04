import { Router } from "express"
import { getLatLonForCity } from "../clients/geoApi"
import { getCurrentWeatherForLatLon } from "../clients/dataApi";

const router = Router();

router.get("/", async (req, res) => {
  if (!req.body.city || !req.body.countryCode) {
    return res.status(400).json("Please provide city and countryCode");
  }
  const { city, countryCode } = req.body;
  const { lat, lon } = await getLatLonForCity(city, countryCode);
  if (!lat || !lon) {
    return res.status(404).json("Could not find coordinates for provided city");
  }
  const weatherData = await getCurrentWeatherForLatLon(lat, lon);
  res.json(weatherData);
});

export { router as rootRouter }