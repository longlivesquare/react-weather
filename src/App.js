import React from 'react';
import FiveDayForecast from './FiveDayForecast';
import { getWeatherData, millisecondsToDayOfWeek } from './util.js';
import WeatherDetails from './WeatherDetails';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: null,
      error: null,
      activeDay: 0
    };

    this.handleActiveDayChange = this.handleActiveDayChange.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // If we successfully get data from the weather API, then we
          // update our state with the new data that we got.
          const weatherData = await getWeatherData(latitude, longitude);
          this.setState({
            weather: weatherData,
            isLoading: false,
          });
        } catch(error) {
          // If there's a problem getting data from the API, we want to inform
          // the user that there was an error.
          this.setState({
            error: 'Oh no 😔 We were unable to get weather data at this time.',
            isLoading: false
          });
        }

      },
      (error) => {
        // If there's an error when we try to get the users current location,
        // for example if the user blocks location services, then we want to
        // show the user an error message.
        this.setState({
          error: 'Ooops 😓 We were unable to get your current location.',
          isLoading: false
        })
      }
    )
  }

  handleActiveDayChange(newActiveDay) {
    this.setState({
      activeDay: newActiveDay
    });
  };

  render() {

    const { isLoading, weather, error, activeDay } = this.state;
    // Instead of doing nested ternary statements, I pulled this section out
    // into a variable to make the code a little bit easier to read. The
    // 'contets' variable just stores some JSX, and we can tell React to render
    // that JSX by putting the variable in curly braces.
    const content = (
      <>
        {error
          ? <p>{error}</p>
          : weather &&
            <>
              <WeatherDetails
                  location="Fresno"
                  dayOfWeek={millisecondsToDayOfWeek(1000*weather.daily[activeDay].dt)}
                  weatherCondition={weather.daily[activeDay].weather[0].description}
                  icon={weather.daily[activeDay].weather[0].icon}
                  units="imperial"
                  currentTemp={activeDay === 0 ? weather.current.temp: '-'}
                  lowTemp={weather.daily[activeDay].temp.min}
                  highTemp={weather.daily[activeDay].temp.max}
                  precipitation={weather.daily[activeDay].pop*100} 
                  humidity={weather.daily[activeDay].humidity} 
                  windSpeed={weather.daily[activeDay].wind_speed}
              />
              <FiveDayForecast forecast={weather.daily.map(data => {
                return {
                  dayOfWeek: millisecondsToDayOfWeek(data.dt*1000),
                  icon: data.weather[0].icon,
                  highTemp: data.temp.max,
                  lowTemp: data.temp.min
                }
              })} 
                activeDay={activeDay}
                onActiveDayChanged={this.handleActiveDayChange}
              />
            </>
        }
      </>
    )

    return (
      <div>
        {isLoading
          ? <p>Loading...⏳</p>
          : <>{content}</>
        }
      </div>
    )
  }

};

export default App;