import { useEffect, useState } from "react";
import WeatherCard from './WeatherCard'

const Week = (props) => {
    const data = props.data
    const week = []

    for (let i in data) {
        const entry = data[i]
        const card = <WeatherCard key={i} date={entry.date} temp={entry.temp} feels={entry.feels} humid={entry.humid} wind={entry.wind}/>
        week.push(card)
    }

    return (
        <div className="week">
            {week}
        </div>
    )
}

export default Week;