interface Coord {
    lon: number;
    lat: number;
}

interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface WeatherMain {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface CurrentWeather {
    coord: Coord;
    weather: WeatherCondition[];
    main: WeatherMain;
    visibility: number;
    wind: Wind;
    clouds: { all: number; };
    rain: { "1h": number; };
    name: string;
}