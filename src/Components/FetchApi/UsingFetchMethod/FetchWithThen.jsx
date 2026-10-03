import React, { useEffect, useState } from 'react'

const FetchWithThen = () => {
let [apiData,setApiData]=useState([])
    
let fetchApi=()=>{
    let response = fetch(`https://api.github.com/users`)
    let arrayRespopnse = response.then((resp) => {
        return resp.json()
    })
    .catch(err => console.log(err))

    arrayRespopnse.then((arr) => {
       setApiData(arr);
    })
    .catch(err => console.log(err))
    .finally( ()=> console.log("Done"))
}
useEffect(()=>{
    fetchApi()
},[])
    return (
        <div>
            <h1>Fetching the API using fetch method with then, catch & finally</h1>
            <div className="container">
                {
                    apiData.map((elm,index)=><h6>{index+1}   {elm.login}</h6>)
                }
            </div>

        </div>
    )
}

export default FetchWithThen
