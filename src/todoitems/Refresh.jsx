import React from "react";
import './Refresh.css';
export default function Refresh(props){
    return (
        <button className="refresh" type="button" onClick={()=>props.value()}>Restart</button>
    )
}