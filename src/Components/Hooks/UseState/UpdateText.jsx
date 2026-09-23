// UseState is fuction present in react package , it is used to update the sate value , useState will return 2 array element 1 is initial 2 is updation , it does not have default key word means desturucture



import React, { useState } from 'react'
import '../hooks.css'

const UpdateText = () => {


    let [Text, setText] = useState("JavaScript")


    let updateText = () => {
        setText("React JS")
    }

    return (

        <div className="hooks">
            <div className="header">
                <h1>Update Name</h1>
            </div>

            <div className="update-name">
                <h2>I Love {Text}</h2>
                <button onClick={updateText}>
                    click Here
                </button>
            </div>
        </div>
    )
}

export default UpdateText