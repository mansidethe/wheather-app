import React, { useEffect,useState } from "react";
import axios from 'axios'
import "./App.css"

export default function App(){

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Pune");
  const [weatherDescription,setWheatherDescription] = useState("")

  async function loadWeatherData(){
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}& appid-f652964084c552e8c0492237a3fabd9c`)

    setWeatherData(response.data)
  }

useEffect(() => {
  loadWeatherData();
}, [])

useEffect(()=>{
  setWheatherDescription("")

 `${weatherData?.weather?.description} ()`
}, [weatherData])

  return(
    <div>
    <h1>Cloud Clustering</h1>
    <p>City: {weatherData?.name}</p>

    <p>Temperature:{weatherData?.main?.temp-273}tofixed(2)</p>

    <p>Description: {weatherDescription}
    </p>

    <p>Visibility: {weatherData?.visibility}meter</p>
    </div>
  )
}