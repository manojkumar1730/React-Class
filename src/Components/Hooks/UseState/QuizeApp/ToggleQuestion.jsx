import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const ToggleQuestion = ({ data, index }) => {
    let { id, question, answer } = data

    let [bool, setBool] = useState(true)
    let handleChange = () => {
        setBool(!bool)
    }
    return (
        <>
            <div className="box">
                <button onClick={handleChange}>
                    {index + 1}. {question}{bool ? <AddIcon /> : <CloseIcon />}</button>
              
                {bool ? <> </> : <p>{answer}</p>}
            </div>

        </>
    )
}

export default ToggleQuestion