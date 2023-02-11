import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Searchengine from './Searchengine';
import "./Searchengine.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='wholeBody'>
      
        <h1>weather app </h1>
       
        <Searchengine />
      
        <div className='prediction'>
          <div className='dayPrediction sunday'>sunday <br /><span className='iconPredict'>&#127782;&#65039;</span><br /><span className='predictTemperature'>20°c</span></div>
          <div className='dayPrediction monday'>monday<br /><span className='iconPredict'>&#127783;&#65039;</span><br /><span className='predictTemperature'>19°c</span></div>
          <div className='dayPrediction tuesday'>tuesday<br /><span className='iconPredict'>&#x1F328;&#xFE0F;</span><br /><span className='predictTemperature'>14°c</span></div>
          <div className='dayPrediction wedenesday'>wedenesday<br /><span className='iconPredict'>&#9928;&#65039;</span><br /><span className='predictTemperature'>15°c</span></div>
          <div className='dayPrediction thursday'>thursday<br /><span className='iconPredict'>&#127782;&#65039;</span><br /><span className='predictTemperature'>18°c</span></div>
        </div>
        </div>
        <div className='footer'>
        <a className='openSource' href="https://github.com/Leilaseif/weather-react-app">my open source </a>by <a className='name' href='/'>leila seif </a>
        </div>

      </header>
    </div>
  );
}

export default App;
