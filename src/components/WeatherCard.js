import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "../components/WeatherIcon";

function WeatherCard({city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed}) {
    return(
    <div className="WeatherCard">
        <h2>{city}</h2>
        <div className="WeatherCard--weatherType">
            <WeatherIcon weatherType={weatherType}/>
            <p className="WeatherCard--type">{weatherType}, {currentTemp}&deg;</p>
        </div>
        <div className="WeatherCard--stats">
            <p>High: <strong>{highTemp}&deg;</strong></p>
            <p>Low: <strong>{lowTemp}&deg;</strong></p>
        </div>
        <p>Humidity: <strong>{humidity}%</strong></p>
        <p>Cloudiness: <strong>{cloudiness}%</strong></p>
        <p>Wind speed: <strong>{windSpeed} mph</strong></p>
    </div>
    )
    //use <strong> </strong> to make something bold
}

export default WeatherCard;