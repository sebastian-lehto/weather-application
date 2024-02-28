
const WeatherCard = ({date, temp, feels, humid, wind}) => {
    return (
        <div>
            <h3>{date}</h3>
            <div>
                <p>Temperature: {temp},  feels like: {feels}</p>
                <p>Humidity: {humid}</p>
                <p>Wind speed: {wind}</p>
            </div>
        </div>
    )
}


export default WeatherCard