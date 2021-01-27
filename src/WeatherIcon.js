const WeatherIcon = ({ iconId }) => {
    const url = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    return (
        <img 
            src={url} 
            alt='weather icon' 
        />
    )
}

export default WeatherIcon;