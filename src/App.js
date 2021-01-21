import React from 'react'
import { getWeatherData } from './util'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      weather: {},
      error: null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await getWeatherData(latitude, longitude)
        this.setState({
          weather: weatherData,
          isLoading: false,
        })
      }, 
      (error) => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.isLoading
          ? <div>loading</div>
          : <div>Weather Data</div>}
      </div>
    )
  }
}

export default App;
