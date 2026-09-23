import React, { useState } from 'react'

const Toggle = () => {
let [Text,setText]=useState("ON")

let change=()=>{
    setText(Text==="ON"?"OFF":"ON")
}

  return (
    <div className="hooks">
        <div className="header">
            <h1>Toggle</h1>
        </div>

    <div className="toggle-app">
        <h3>{Text}</h3>
        <button onClick={change}>
            Toggle 
        </button>
    </div>

    </div>
  )
}

export default Toggle