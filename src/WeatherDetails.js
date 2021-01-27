import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const WeatherDetails = (props) => {
    return (
        <div className="WeatherDetails">
            <p className="text_large">{props.location}</p>
            <p>{props.dayOfWeek}</p>
            <p>{props.weatherCondition}</p>
            <div className="details_wrapper">
                <div className="icon_and_current">
                    <WeatherIcon iconId={props.icon} />
                    <span className="text_large">{
                        isNaN(props.currentTemp)?props.currentTemp:Math.round(props.currentTemp)}
                    </span>
                    <span>&deg;F</span>
                    <span>|</span>
                    <span>&deg;C</span>
                </div>
                <div>
                    <p>High: {Math.round(props.highTemp)}&deg;</p>
                    <p>Low: {Math.round(props.lowTemp)}&deg;</p>
                    <p>Precipitation: {props.precipitation.toFixed(0)}%</p>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind: {props.windSpeed} {props.units === 'imperial' ? 'mph' : 'km/h'}</p>
                </div>
            </div>
        </div>
    )
};

WeatherDetails.propTypes = {
    location: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    weatherCondition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    units: PropTypes.oneOf(['imperial', 'metric']),
    currentTemp: PropTypes.number,
    lowTemp: PropTypes.number.isRequired,
    highTemp: PropTypes.number.isRequired,
    precipitation: PropTypes.number.isRequired, 
    humidity: PropTypes.number.isRequired, 
    windSpeed: PropTypes.number.isRequired, 
}

export default WeatherDetails;