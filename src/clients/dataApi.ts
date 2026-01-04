import axios from "axios";
import { openWeatherApiKey, openWeatherDataApiUrl } from "../config";
import { CurrentWeather } from "../interfaces/weather";

const openWeatherDataApiClient = axios.create({
    baseURL: openWeatherDataApiUrl,
    params: { appid: openWeatherApiKey }
});

export const getCurrentWeatherForLatLon = async (lat: number, lon: number) => {
    const { data: { main, weather, clouds } } = await openWeatherDataApiClient.get<CurrentWeather>("", {
        params: { lat, lon, exclude: "minutely,hourly,daily,alerts" }
    });
    return {
        temp: main.temp,
        humidity: main.humidity,
        clouds: clouds.all,
        feelsLike: main.feels_like,
        description: weather[0].description
    };
};