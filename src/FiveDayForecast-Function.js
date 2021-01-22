import { useEffect, useState } from "react";
import { getWeatherData } from './util'
import WeatherDetails from "./WeatherDetails";
import WeatherSummary from "./WeatherSummary";

const FiveDayForecast = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [daily, setDaily] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const weatherData = await getWeatherData(latitude, longitude);
              setCurrentWeather(weatherData.current);
              setDaily(weatherData.daily);
              setIsLoading(false);
              console.log('loaded weather');
            }, 
            (e) => {
                setError(e);
            })
    }, [isLoading])

    return (
        <>
        {isLoading
        ? <div>Loading</div>
        : error
        ? {error}
        : <div>
            <WeatherDetails 
                location='Fresno'
                dayOfWeek='Wednesday'
                weatherCondition={currentWeather.weather[0].description}
                icon='https://picsum.photos/id/1/200/200'
                units='imperial'
                currentTemp={currentWeather.temp}
                highTemp={daily[0].temp.max}
                lowTemp={daily[0].temp.min}
                precipitation={currentWeather.dew_point}
                humidity={currentWeather.humidity}
                windSpeed={currentWeather.wind_speed}
            />
            <DailyForecast 
                daily={daily}
            />
        </div>
        }
        </>
    );
};

const DailyForecast = (props) => {
    const daily = props.daily.map((dayWeather => 
        <WeatherSummary
            key={dayWeather.dt}
            dayOfWeek='Monday'
            icon='https://picsum.photos/id/1/200/200'
            highTemp={dayWeather.temp.max}
            lowTemp={dayWeather.temp.min}
        />
        ));

    return (
        <div>
            {daily}
        </div>
    )
};

export default FiveDayForecast;