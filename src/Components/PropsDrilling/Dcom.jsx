import React from 'react'

const Dcom = (props) => {

    let recivedMoney = props.money
    return (
        <>
            <h1>Im in D Component</h1>
            <h3>recived Money {recivedMoney}</h3>
        </>
    )
}

export default Dcom