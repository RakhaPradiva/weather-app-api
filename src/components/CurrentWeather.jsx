import { useState, useEffect } from "react";
import { getWeatherByCurrentLocation } from "../api";
import { sunny } from "../assets";
import {
	FaWind,
	FaEye,
	FaTemperatureLow,
	FaTemperatureHigh,
} from "react-icons/fa";
import { BiDroplet, BiBarChartAlt } from "react-icons/bi";
import { WiThermometerExterior } from "react-icons/wi";

const CurrentWeather = ({ currentWeather, weatherCondition }) => {
	const [currentWeatherData, setCurrentWeatherData] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const weatherData = await getWeatherByCurrentLocation();
				setCurrentWeatherData(weatherData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchWeather();
	}, []);

	return (
		<>
			{currentWeather ? (
				<div className="flex w-full flex-col items-center justify-around gap-5 px-5 py-2 text-white md:flex-row">
					<div className="flex flex-col items-center gap-2 md:w-3/4">
						<img
							src={currentWeather.weatherIcon}
							alt={currentWeather.weatherDescription}
							title={currentWeather.weatherDescription}
							className="h-20 w-20 object-contain"
						/>
						<h2 className="text-4xl font-bold">
							{" "}
							{currentWeather.currentTemp.toFixed()}°C
						</h2>
						<h2 className="text-2xl font-semibold">
							{" "}
							{currentWeather.name}, <span>{currentWeather.country}</span>
						</h2>
						<p>{currentWeather.weatherDescription}</p>
					</div>
					<div className="flex w-full flex-wrap items-center justify-center gap-5 md:w-1/3 md:flex-col md:items-start md:justify-between md:gap-4">
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Feels Like"
						>
							<WiThermometerExterior className="text-3xl" />
							<p className="text-lg">{currentWeather.feelsLike.toFixed()}°C</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Pressure"
						>
							<BiBarChartAlt className="text-3xl" />
							<p className="text-lg">{currentWeather.pressure} hPa</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Humidity"
						>
							<BiDroplet className="text-3xl" />
							<p className="text-lg"> {currentWeather.humidity}%</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Wind Speed"
						>
							<FaWind className="text-3xl" />
							<p className="text-lg">{currentWeather.windSpeed} m/s</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Visibility"
						>
							<FaEye className="text-3xl" />
							<p className="text-lg">
								{currentWeather.visibility.toFixed() / 1000} km
							</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Min Temp"
						>
							<FaTemperatureLow className="text-3xl" />
							<p className="text-lg">{currentWeather.minTemp.toFixed()}°C</p>
						</div>
						<div
							className="flex w-1/3 items-center gap-2 md:w-full"
							title="Max Temp"
						>
							<FaTemperatureHigh className="text-3xl" />
							<p className="text-lg">{currentWeather.maxTemp.toFixed()}°C</p>
						</div>
					</div>
				</div>
			) : (
				<p className="text-4xl text-white">Loading...</p>
			)}
		</>
	);
};

export default CurrentWeather;
