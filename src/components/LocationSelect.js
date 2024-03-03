import React, {useState} from "react";

const LocationSelect = (props) => {

    const [city, setCity] = useState("Helsinki")
    const opts = props.cities.map((c) => <option key={c} value={c}>{c}</option>)
    const handleChange = props.handle
    return (
        <div>
            <select defaultValue="Helsinki" onChange={(e) => {
                setCity(e.target.value)
                handleChange(e.target.value)
                }}>
                {opts}
            </select>
            <p>{city}</p>
        </div>
    )
}
export default LocationSelect