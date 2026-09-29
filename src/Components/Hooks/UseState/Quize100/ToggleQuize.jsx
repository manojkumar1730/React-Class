import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const ToggleQuize = ({ data, index }) => {
  let { id, question, answer } = data
  let [bool, setBool] = useState(true);

  let handleBool = () => {
    setBool(!bool);
  }

  return (
    <>
      <div className='box'>
        <button onClick={handleBool}>
          {index + 1}. {question} {bool ? <AddIcon className='add-icon'/> : <CloseIcon className='close-icon'/>}
        </button>
        {bool ? <></> : <p>{answer}</p>}
      </div>
    </>
  )
}

export default ToggleQuize