"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

let WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export default function Home() {

  const [place, setPlace] = useState("Kisumu");

  const getWeatherData = async ()=> {

    if(place && place.length>0){
      try{
        let url = '//https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}'
      }
      catch(err){}
    }
  }

  useEffect(()=>{getWeatherData()},[])
  return (
    <div>
    <h1>Hello World</h1>
   </div>
  );
}
