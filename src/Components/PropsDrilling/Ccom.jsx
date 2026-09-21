import React from 'react'
import Dcom from './Dcom'

const Ccom = (props) => {
    let rs90 = props.money - 5
    return (
        <>
            <h1>Im in C Component</h1>
            <Dcom money={rs90} />
        </>
    )
}

export default Ccom