import React from "react";

function WeatherCard({city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed}) {
    return(
    <div>
        <h2>{city}</h2>
        <p>{currentTemp}</p>
        <p>High: {highTemp}</p>
        <p>Low: {lowTemp}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind speed: {windSpeed} mph</p>
    </div>
    )
    //use <strong> </strong> to make something bold
}

export default WeatherCard;