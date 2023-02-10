import React, { useState } from "react";
import "./Searchengine.css";
import axios from "axios";
export default function Searchengine() {
  let [City, setCity] = useState("");
  let [temperature, setTemperature] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  if (City) {
    return (
      <div className="forming">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>

        <li>Temperature: {Math.round(temperature.temp)}°C</li>
        <li>Description: {temperature.description}</li>
        <li>Humidity: {temperature.humidity}%</li>

        <li>
          <img src={temperature.icon} alt={temperature.description} />
        </li>
      </div>
    );
  } else {
    return (
        <div className="forming">
          <form className="form">
            <input type="search" className='search'/>
            <input type="submit" value="Search" className='submit' />
            <input type="submit" value="current" className='current' />
          </form>
          <li className="text">the temperature in New York is : </li>
          <span className='temperatureNumber'>20 </span>
          <a className='celsiusUnit' href='/'>°c</a>
        </div>
    )
  }
}