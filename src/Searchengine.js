import React, { useState } from "react";
import "./Searchengine.css";
import axios from "axios";
import FormatedDate from "./FormatedDate"

export default function Searchengine() {

  let [city, setCity]= useState("");
  let [temperature, setTemperature]= useState({});
  

  
  
  function showTemperature (response){
    setTemperature( {temperat: response.data.main.temp ,
       wind :response.data.wind.speed ,
        humidity :response.data.main.humidity ,
       date: new Date (response.data.dt*1000)});
  
  }
  function handlesubmit(event){
    event.preventDefault();
    let apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9777feb9b9683ea2533ba76e82f84952&units=metric`;
    axios.get(apiurl).then(showTemperature);
    
    
    }
    function updateCity (event){
      setCity(event.target.value);
    }
  
    return (
      <div>
      <div className="forming">
        <form onSubmit={handlesubmit}>
          <input type="search"  onChange={updateCity}/>
          <input type="submit" value="Search"  />
        </form>
        <li>
        <FormatedDate  date={temperature.date}/>
        </li>
        <h2 className="citySearch">{city}</h2>
        
          <li className="text">the temperature in {city} is : </li>
          <span className='temperatureNumber'>{Math.round(temperature.temperat)}</span>
          <a className='celsiusUnit' href='/'>°c</a>
        <div className='Row'>
            <div className='icon more'> &#9728;&#65039;</div>
            <div className='more windHumadity'>
            <div className='wind'>wind: {Math.round(temperature.wind)}</div>
            <div className='humadity '>humidity:{temperature.humidity}%</div>
            </div>
        </div>
      </div>
      </div>
   );}