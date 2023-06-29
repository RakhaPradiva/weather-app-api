import axios from "axios";
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = import.meta.env.VITE_OPEN_WEATHER_API_URL;

export const getWeatherByCity = async (city) => {
	try {
		const res = await axios.get(
			`${baseUrl}q=${city}&appid=${apiKey}&units=metric`
		);

		const {
			weather,
			name: name,
			sys: { country },
			main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
			wind: { speed },
			visibility,
		} = res.data;

		const currentWeatherData = {
			weatherIcon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
			weatherDescription: weather[0].description,
			name,
			country,
			currentTemp: temp,
			feelsLike: feels_like,
			minTemp: temp_min,
			maxTemp: temp_max,
			pressure,
			humidity,
			windSpeed: speed,
			visibility,
		};
		return currentWeatherData;
	} catch (error) {
		throw new Error(error);
	}
};

export const getWeatherByCurrentLocation = async () => {
	try {
		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
		const { latitude, longitude } = position.coords;
		const res = await axios.get(
			`${baseUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
		);

		const {
			weather,
			name: name,
			sys: { country },
			main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
			wind: { speed },
			visibility,
		} = res.data;

		const currentWeatherData = {
			weatherIcon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
			weatherDescription: weather[0].description,
			name,
			country,
			currentTemp: temp,
			feelsLike: feels_like,
			minTemp: temp_min,
			maxTemp: temp_max,
			pressure,
			humidity,
			windSpeed: speed,
			visibility,
		};
		return currentWeatherData;
	} catch (error) {
		throw new Error(error);
	}
};
