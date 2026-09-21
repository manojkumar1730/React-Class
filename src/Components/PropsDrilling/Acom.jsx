import React from 'react'
import Bcom from './Bcom'

const Acom = () => {
    let rs100 = 100
    return (
        <>
            <h1> Im in A Componet</h1>
            <h3>Sended Money {rs100}</h3>
            <Bcom money={rs100} />
        </>
    )
}

export default Acom