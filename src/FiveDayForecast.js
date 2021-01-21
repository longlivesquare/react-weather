import { useEffect, useState } from "react";
import { getWeatherData } from './util'
import WeatherDetails from "./WeatherDetails";

const FiveDayForecast = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [daily, setDaily] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const weatherData = await getWeatherData(latitude, longitude)
              setCurrentWeather(weatherData.current)
              setDaily(weatherData.daily)
              setIsLoading(false)
            }, 
            (e) => {
                setError(e);
            })
    }, [isLoading])

    return (
        <>
        <p>{isLoading
        ? <div>Loading</div>
        : error !== ''
        ? {error}
        : <WeatherDetails 
            location='Fresno'
            dayOfWeek='Wednesday'
            weatherCondition={currentWeather.weather.description}
            icon='https://picsum.photos/id/1/200/200'
            units='imperial'
            currentTemp={currentWeather.temp}
            highTemp={daily[0].temp.max}
            lowTemp={daily[0].temp.min}
            precipitation={currentWeather.dew_point}
            humidity={currentWeather.humidity}
            windSpeed={currentWeather.wind_speed}
        />
        }</p>
        </>
    );
};

export default FiveDayForecast;