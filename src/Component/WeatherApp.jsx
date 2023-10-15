import React, { useState } from 'react'
import "./WeatherApp.css"
const WeatherApp = () => {
   

   const[wiIcon,setwiIcon]=useState("clear.png");



   const api_key="daad9ef6cc693f2b77cbe8b86ab5a7df";

   const search = async() =>{
   const  element=document.getElementsByClassName("city-input");
   if(element[0].value==="")
   {
    return 0;
   }
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
   const response=await fetch(url);
  const data=await response.json();
  const humidity=document.getElementsByClassName("humidity");
  const wind=document.getElementsByClassName("wind-rate");
  const temperature=document.getElementsByClassName("weather-temp");
  const location=document.getElementsByClassName("weather-location");

  humidity[0].innerHTML=data.main.humidity +"%";
  wind[0].innerHTML=data.wind.speed +"km/h";
  temperature[0].innerHTML=data.main.temp+"°c";
  location[0].innerHTML=data.name;
   
  if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
  {
    setwiIcon("clear.png")
  }
  else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
  {
    setwiIcon("cloud.png")
  }
  else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
  {
    setwiIcon("drizzle.png")
  }
  else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
  {
    setwiIcon("drizzle.png")
  }
  else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
  {
    setwiIcon("rain.png")
  }
  else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
  {
    setwiIcon("rain.png")
  }
  else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
  {
    setwiIcon("snow.png")
  }
  else{
    setwiIcon("clear.png")
  }

   }
   



  
  
  
  
  
    return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="city-input" placeholder='Search City' />
            <div className="search-icon" onClick={search}>
                <img src="search.png"></img>
            </div>
        </div>
        <div className="weather-img">
            <img src={wiIcon}></img>
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src="humidity.png" alt="" className="icon" />
                <div className="data">
                    <div className="humidity"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src="wind.png" alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate"></div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WeatherApp