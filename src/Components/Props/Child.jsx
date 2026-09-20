import React from 'react'

const Child = (props) => {


//Destructuring the user object
    let{user,age}=props.userDetails;

    // Destructuring the attributes
    let {text,num,hob}=props;

    console.log(props)
    return (
        <>
            <div className="child">
                <h1>I'm in child component</h1>
                <h3>{props.num}{props.text}</h3>
                <h3>{user} age is {age}</h3>
                <h4>{user} is {hob[2]}</h4>
            </div>

        </>
    )
}

export default Child