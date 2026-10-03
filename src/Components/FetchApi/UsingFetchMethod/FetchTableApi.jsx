import React, { useEffect, useState } from 'react'

const FetchingTableApi = () => {
    let [getApi, setGetApi] = useState([])
    let fetchApi = async () => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            let arrayresp = await response.json();
            setGetApi(arrayresp);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            console.log("Done")
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <div>
            {
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Slno</th>
                            <th>Name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getApi.map((elem, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
            }
        </div>
    )
}

export default FetchingTableApi