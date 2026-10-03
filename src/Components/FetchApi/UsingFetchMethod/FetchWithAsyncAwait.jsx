import React, { useState } from 'react'

const FetchWith_async_await = () => {
    let [apiData, setApiData] = useState([])
    let fetchApi = async () => {
        try {
            let data = await fetch(`https://api.github.com/users`)
            let arrayAipData = await data.json()
            setApiData(arrayAipData)

        }
        catch (error) {
            console.log(error)
        }
        finally {
            console.log("Done")
        }
    }
    fetchApi()

    return (
        <div>
            <h1>FetchWith_async_await</h1>
            <div className="container">
                {
                    apiData.map((elm,index)=> <h4>{index+1} {elm.login}</h4>)
                }
            </div>
        </div>
    )
}

export default FetchWith_async_await