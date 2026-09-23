import React, { useState } from 'react'

const ChangeColor = () => {
  const [Text, setText] = useState("")

  const change = (event) => {
    setText(event.target.value)   
  }

  return (
    <div className="hooks">
      <div className="header">
        <h1>INPUT TEXT</h1>
      </div>

      <div className="toggle-app">
        <input 
          type='text' 
          onChange={change}   
        />
        <h1 id='hel' style={{ color: Text }}>hello</h1>
      </div>
    </div>
  )
}

export default ChangeColor
