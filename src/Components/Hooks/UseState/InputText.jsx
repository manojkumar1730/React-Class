import React, { useState } from 'react'

const InputText = () => {
let [Text,setText]=useState(" ")

let change=()=>{
   setText(event.target.value)
}

  return (
    <div className="hooks">
        <div className="header">
            <h1>INPUT TEXT</h1>
        </div>

    <div className="toggle-app">
        <input type='text' onChange={change}></input>

        <h1>{Text}</h1>
        
    </div>

    </div>
  )
}

export default InputText