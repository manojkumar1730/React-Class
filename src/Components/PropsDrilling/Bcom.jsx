import React from 'react'
import Ccom from './Ccom'

const Bcom = (props) => {
    let rs95 = props.money - 5
    return (
        <>
            <h1>Im in B Component</h1>
            <Ccom money={rs95} />
        </>
    )
}

export default Bcom