
const WeatherCard = ({date, temp, feels, humid, wind}) => {
    return (
        <div className="card">
            <div className="date">
                <h3>{date.split(" ")[0]}</h3>
            </div>
                <p className="info">Temperature: {temp}</p>
                <p className="info">Feels like: {feels}</p>
                <p className="info">Humidity: {humid}</p>
                <p className="info">Wind speed: {wind}</p>            
        </div>
    )
}


export default WeatherCard