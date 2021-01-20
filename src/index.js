import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WeatherDetails from './WeatherDetails'

ReactDOM.render(
  <React.StrictMode>
    <WeatherDetails
      location='Fresno,CA'
      icon='https://picsum.photos/id/1/200/200'
      dayOfWeek='Monday'
      weatherCondition='Light rain' 
      currentTemp={38}
      highTemp={60}
      lowTemp={32}
      precipitation='10'
      humidity='64'
      windSpeed='6'
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
