import React from 'react'
import Child from './Child'
const Parent = () => {

    let details = {
        user: "manu",
        place: "bdvt",
        age: 22
    }

    let hobbies=["Gaming","Sleeping","Playing"]


    return (
        <>
            <h1>I'm in parent commponent</h1>
            <Child text="Welcome"
                num={100}
                userDetails={details}
                hob={hobbies}
            />  
        </>
    )
}

export default Parent