import React from "react";


export default function FormatedDate(props){
   
    let days=["sunday", "monday", "tuesday", "wedenesday", "thursday","friday","saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours<10){
        hours = `0${hours}`;
    }
    let minutes =props.date.getMinutes();
    if (minutes<10){
        minutes= `0${hours}`;
    }
    return(
        <div> {day} {hours}:{minutes}</div>
    );
}