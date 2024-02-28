import WeatherCard from "./WeatherCard";
import WeatherService from '../services/WeatherService'
import { useEffect, useState } from "react";

const Week = () => {

    const location = "Helsinki"
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const ws = new WeatherService();
            try {
                const allData = await ws.getWeatherByLocation(location);
                const list = allData.list
                const data = []
                for (let i = 0; i < list.length; i++) {
                    var entry = list[i]
                    var date = entry.dt_txt
                    if (date.includes("12:00:00")) {
                        var key = entry.dt
                        var temp = entry.main.temp
                        var feels = entry.main.feels_like
                        var humid = entry.main.humidity
                        var wind = entry.wind.speed
                        var day = <WeatherCard key={key} date={date} temp={temp} feels={feels} humid={humid} wind={wind}/>
                        data.push(day)
                    }
                }
                setWeatherData(data)
            } catch (error) {
                console.log("Error fetching weather:", error.message);
            }
        };
        fetchWeather();
    }, [location]);

    return (
        <div className="week">
            {weatherData}
        </div>
    )
}

export default Week;