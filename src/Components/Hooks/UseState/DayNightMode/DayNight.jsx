import React from 'react'
import './daynight.css'
const DayNight = () => {
    let [bool, setBool] = useState(true)

    let handleChangeMode = () => {
        setBool(!bool)

        if(bool)
            document.body.style.cssText=`background:black`
        else
            document.body.style.cssText=`background:white`
    }

    return (
        <div className="day-night">
            
                <h1>Day-Night-Mode</h1>
          

            <div className="open-btn">
                <button onClick={handleChangeMode}
                className={bool ? '':'right'}
                >
                    {bool ? "DAY":"NIGHT" }
                </button>
            </div>
        </div>
    )
}

export default DayNight