import React, { useState } from 'react'
import OneCard from './OneCard'
import './togglecard.css'


const ToggleCard = () => {
    let [bool, setBool] = useState(true)
    let handleBool = () => {
        setBool(!bool)
    }
    return (
        <div className="toggle-card">
            <div className="container">
         
                    <h1>Toggle card</h1>
                    <button onClick={handleBool}>
                        {bool ? "Display Crad" : "Hide"}
                    </button>
                    {bool ? <> </> : <OneCard/>}
               
            </div>
        </div>
    )
}

export default ToggleCard