import React from "react";
import './Row.css';
export default function Row(props){
    return(
        <div className="spn" onClick={props.onClick}> 
        {props.value}
        </div>
    )
}