import PropTypes from 'prop-types';
import Temperature from './Temperature';

const WeatherSummary = (props) => {
    var tempSym = 'F';
    var windSym = 'mph';

    if (props.units === 'metric') {
        tempSym = 'C'
        windSym = 'kph';
    }

    return (<div className="WeatherSummary">
        <p>{props.dayOfWeek}</p>
        
        <img src={props.icon} alt="weather icon" />
        <div className="WeatherSummary-temp">
            <Temperature temp={props.currentTemp} />
            {tempSym}
        </div>
        <div className="WeatherSummary-misc">
            <ul>
                <li>High: <Temperature temp={props.highTemp} /></li>
                <li>Low: <Temperature temp={props.lowTemp} /></li>
                <li>Precipitation: {props.precipitation}%</li>
                <li>Humidity: {props.humidity}%</li>
                <li>Wind: {props.windSpeed} {windSym}</li>
            </ul>
        </div>
    </div>);
};

WeatherSummary.propTypes = {
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

export default WeatherSummary;