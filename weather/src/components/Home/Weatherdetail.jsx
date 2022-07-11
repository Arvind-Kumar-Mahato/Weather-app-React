import React from "react";
import "../styles/Weatherdetail.css";
import graph from "./img/graph.png";

import { Line } from "react-chartjs-2";





export default function Weatherdetail({ weatherInfo, location, date }) {

    
      




    return (
        <div className="main_details">
        
            <div className="humandPre">
               
                <div className="pressure">
                    <h4>Pressure</h4>
                    <p>{weatherInfo.current.pressure} hpa</p>
                </div>
                <div className="humid">
                    <h4>Humidity</h4>
                    <p>{weatherInfo.current.humidity} %</p>
                </div>
            </div>
            <div className="riseAndset">
                <div className="rise">
                    <h4>Sunrise</h4>
                    <p>
                        {new Date(weatherInfo.current.sunrise * 1000).toLocaleTimeString()}
                    </p>
                </div>
                <div className="set">
                    <h4>Sunset</h4>
                    <p>
                        {new Date(weatherInfo.current.sunset * 1000).toLocaleTimeString()}
                    </p>
                </div>
                       
            </div>
            <div>
                      <img src = {graph} alt =""/>
                       </div>
                     
                   
                     
                       
        </div>
    );
}