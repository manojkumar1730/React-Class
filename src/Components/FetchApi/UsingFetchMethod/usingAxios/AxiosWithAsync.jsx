import { Cast } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'




//Fake Store API(website)
//npx json-server --watch src/database/myappdata.json --port 4000  (TO Run own API)


const AxiosWithAsyncAwait = () => {
    let [githubData, setgithubData] = useState([])
    let fetchApi = async () => {
        try {
            let apiData = await axios.get("https://api.github.com/users")
            setgithubData(apiData.data)
        }
        catch(error){
            console.log(error)
        }
        finally{
            console.log("Done")
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
            <h1>Axios With Async Await</h1>
              {
        <table border={1}>
          <thead>
            <tr>
              <th>Slno</th>
              <th>Name</th>
               <th>Node ID</th>
               <th>Avatar URL</th>
            </tr>
          </thead>
          <tbody>
            {
              githubData.map((elm,index)=>{
                let{login,node_id,avatar_url}=elm
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{login}</td>
                    <td>{node_id}</td>
                     <td>{avatar_url}</td>
                  </tr>
                )

              })
            }
          </tbody>
        </table>
      }
      </div>
    )
}

export default AxiosWithAsyncAwait


