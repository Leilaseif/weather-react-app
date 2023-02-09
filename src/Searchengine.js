import React from 'react';
import "./Searchengine.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Searchengine() {
    return (
        <div className="forming">
          <form className="form">
            <input type="search" className='search'/>
            <input type="submit" value="Search" className='submit' />
            <input type="submit" value="current" className='current' />
          </form>
          <li className="text">the temperature in New York is : </li>
          
          <span className='temperatureNumber'>20 </span>
          <a className='celsiusUnit'>°c</a>
        </div>
          
        
    )}