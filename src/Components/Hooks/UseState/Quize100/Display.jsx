import React, { useState } from 'react'
import { quizData } from './quizeData'
import ToggleQuize from './ToggleQuize'
import './quize.css'

const Display = () => {
    let [quize, setQuize] = useState(quizData)
    return (
        <div className='quiz-app'>
            <h1>100 Quize App</h1>
            <div className="container">
                {
                    quize.map((data, index) => {
                        return (
                            <div className="toggle" key={index}>
                                <ToggleQuize
                                    data={data} index={index}
                                />
                            </div>
                        )
                    })


                }
            </div>

        </div>
    )
}

export default Display