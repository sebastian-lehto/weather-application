import axios from 'axios';
import ApiKey from '../ApiKey';

const key = new ApiKey();
const API_KEY = key.get();
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"

class WeatherService {
    constructor() {
        this.apiKey = API_KEY
        this.baseUrl = API_BASE_URL
    }

    formatData(data) {
        const list = data.list
        const formattedData = []
        for (let i = 0; i < list.length; i++) {
            var entry = list[i]
            var date = entry.dt_txt
            if (date.includes("12:00:00")) {
                var temp = entry.main.temp
                var feels = entry.main.feels_like
                var humid = entry.main.humidity
                var wind = entry.wind.speed
                var day = {date:date, temp:temp, feels:feels, humid:humid, wind:wind}
                formattedData.push(day)
            }
        }
        return formattedData
    }

    async getWeatherByLocation(location) {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    q: location,
                    appid: this.apiKey,
                    units: "metric"
                }
            });
            if (response.status === 200) {

                return this.formatData(response.data);
            } else {
                throw new Error('Unable to fetch weather data');
            }
        } catch (error) {
            throw new Error('Weather data request failed')
        }
    }

}
export default WeatherService