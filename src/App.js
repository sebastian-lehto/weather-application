import { useState, useEffect } from 'react';
import './App.css';
import LocationSelect from './components/LocationSelect';
import Week from './components/Week';
import WeatherService from './services/WeatherService';
import getCities from './services/CityService';

const App = () => {
  const ws = new WeatherService();
  const [selectedCity, selectCity] = useState("Helsinki")
  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = async () => {
      try {
          const data = await ws.getWeatherByLocation(selectedCity);
          setWeatherData(data)
      } catch (error) {
        console.log("Error fetching weather:", error.message);
      }
  };

  fetchWeather();
  const cities = getCities();

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <LocationSelect handle={selectCity} cities={cities}/>
      <Week data={weatherData}/>
    </div>
  );
}

export default App;
