import { useState, useEffect } from "react";
import { Search, CurrentWeather } from "./components";
import { getWeatherByCurrentLocation, getWeatherByCity } from "./api";

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null);

	const handleSearch = async (city) => {
		try {
			const weatherData = await getWeatherByCity(city);
			setCurrentWeather(weatherData);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCurrentLocation = async () => {
		try {
			const weatherData = await getWeatherByCurrentLocation();
			setCurrentWeather(weatherData);
		} catch (error) {
			console.log(error);
		}
	};

	const weatherCondition =
		currentWeather && currentWeather.currentTemp > 30
			? "bg-gradient-to-r from-red-600 to-yellow-400"
			: "bg-gradient-to-r from-blue-400 to-emerald-500";

	useEffect(() => {
		handleCurrentLocation();
	}, []);

	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<div
				className={`container rounded-md md:max-h-screen ${weatherCondition} shadow-lg transition duration-500 md:w-3/4 lg:w-1/2`}
			>
				<div className="flex flex-col items-center justify-center gap-5 p-5">
					<Search
						onSearch={handleSearch}
						onCurrentLocation={handleCurrentLocation}
					/>
					<CurrentWeather
						currentWeather={currentWeather}
						weatherCondition={weatherCondition}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
