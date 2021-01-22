import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const WeatherDetails = (props) => {
    return (
        <div className='WeatherDetail-all'>
            <p>{props.location}</p>
            <p>{props.DayOfWeek}</p>
            <p>{props.weatherCondition}</p>
            <div className='WeatherDetail'>
                <div>
                    <WeatherIcon iconId={props.icon}/>
                    <span>{props.currentTemp}</span>
                    <span>F&deg;</span>
                    <span>|</span>
                    <span>C&deg;</span>
                </div>
                <div className="WeatherDetail-stats">
                    <p>High: {props.highTemp}&deg;</p>
                    <p>Low: {props.lowTemp}&deg;</p>
                    <p>Precipitation: {props.precipitation}%</p>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind: {props.windSpeed} mph</p>
                </div>
            </div>
        </div>
    );
};

WeatherDetails.propTypes = {
    location: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    weatherCondition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    units: PropTypes.oneOf(['imperial', 'metric']),
    currentTemp: PropTypes.number,
    highTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired,
    precipitation: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
};

export default WeatherDetails;