import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css"

export default function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Pune");
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
      <h1>Cloud Clustering </h1>
      <input type="text" value={city} onChange={(e)=>{
        setCity(e.target.value);
      }}/>
      <p>City: {weatherData?.name}</p>

      <p>Temperature:{(weatherData?.main?.temp - 273).toFixed(2)}</p>

      <p>Description: {weatherDescription}
      </p>

      <p>Visibility: {weatherData?.visibility}meter</p>
    </div>
  )
}