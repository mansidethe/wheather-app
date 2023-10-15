import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css"
import image from './wheather.jfif'
import rainy from './../src/rainy.jfif'
import haze from './../src/haze.jfif'


export default function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("City");
  const [weatherDescription, setWheatherDescription] = useState("")

  async function loadWeatherData() {

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`)

      setWeatherData(response.data);
    }catch(e){
      console.log(e); 
    }
  }
  useEffect(() => {
    loadWeatherData();
  }, [])

  useEffect(() => {
    loadWeatherData();
  }, [city])

  useEffect(() => {
    setWheatherDescription(`${weatherData?.weather?.[0]?.main} (${weatherData?.weather?.[0]?.description})`
  )}, [weatherData])

  return (
   
      
    <div>
      <h1 className="cloud-text">Cloud Clustering </h1>
      <input type="text" className="search-bar"
      value={city} onChange={(e)=>{
        setCity(e.target.value);
        
      }}/>
          <div className="cloud-card">
      <p className="city-name">City : {weatherData?.name}</p>

      <p className="city-name">Temperature : {(weatherData?.main?.temp - 273).toFixed(2)}</p>

      <p className="city-name">Description : {weatherDescription}
      </p>

      <p className="city-name">Visibility : {weatherData?.visibility}meter</p>
<div className="images">
      <img src={image} className="cloud-img"/>
      <img src={rainy} className="cloud-img"/>
      <img src={haze} className="cloud-image"/>
    </div>
    </div>
    </div>
  )
}