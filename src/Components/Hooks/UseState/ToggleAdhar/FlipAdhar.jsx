import React, { useState } from 'react'
import FrontAdhar from './FrontAdhar'
import BackAdhar from './BackAdhar'

const FlipAdhar = () => {
   let [bool,setBool]=useState(true)
let handleBool=()=>{
    setBool(!bool)
}
  return (
    <div className="run" onClick={handleBool}>
         {
            bool ? <FrontAdhar/> : <BackAdhar/>
         }
    </div>
  )
}

export default FlipAdhar