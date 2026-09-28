import React, { useState } from 'react'
import { quizedata } from './quizeData'
import ToggleQuestion from './ToggleQuestion'
import './quizeapp.css'
const DisplayQuize = () => {
    let [quizArray, setQuizeData] = useState(quizedata)

    return (
        <div className="quiz-app">
            <h1>Quize Applicatiion</h1>
            <div className="container" >
                {
                    quizArray.map((data ,index) => {
                       
                        return (
                          <div className="toggle" key={index}>
                            <ToggleQuestion data={data} index={index}/>
                          </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default DisplayQuize 