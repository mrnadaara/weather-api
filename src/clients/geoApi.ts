import axios from "axios";
import { openWeatherApiKey, openWeatherGeoApiUrl } from "../config";
import { Geocode } from "../interfaces/geocode";

const openWeatherGeoApiClient = axios.create({
    baseURL: openWeatherGeoApiUrl,
    params: { appid: openWeatherApiKey }
});

export const getLatLonForCity = async (city: string, countryCode: string) => {
    const { data } = await openWeatherGeoApiClient.get<Geocode[]>("", {
        params: { q: `${city},${countryCode}` }
    });
    if (!data.length) return { lat: null, lon: null }
    return { lat: data[0].lat, lon: data[0].lon };
};