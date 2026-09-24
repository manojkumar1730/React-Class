import React, { useState } from 'react'

const TogglePara = () => {
let [bool,setBool]=useState(true)

let handleChangeText=()=>[
    setBool(!bool)
]

  return (
    <div className="hooks">
        <div className="header">
            <h1>Toggle para</h1>
        </div>

        <div className="toggle-para">
            <button onClick={handleChangeText}>
                {bool ? 'Show':'Hide'}
            </button >
     
                {bool ? <></>:<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus tempora consequuntur quod quis, magnam culpa reiciendis, dolores asperiores mollitia quo eaque delectus aspernatur blanditiis corporis inventore cumque nesciunt nihil ea, laborum rem? Alias explicabo ipsum culpa. Non minima eius doloremque libero earum beatae, autem nihil quae obcaecati praesentium tenetur.</p>}
            
        </div>
    </div>
  )
}

export default TogglePara