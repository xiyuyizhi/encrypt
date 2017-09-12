import React from 'react';
import "./btn.css"

export default function Button(props){
    return <button className="btn" onClick={props.onClick}>{props.label}</button>
}