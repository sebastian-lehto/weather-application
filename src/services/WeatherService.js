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
                return response.data;
            } else {
                throw new Error('Unable to fetch weather data');
            }
        } catch (error) {
            throw new Error('Weather data request failed')
        }
    }

}
export default WeatherService