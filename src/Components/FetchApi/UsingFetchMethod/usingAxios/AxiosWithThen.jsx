import { Margin } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosWithThen = () => {
  let [githubData, setgithubData] = useState([])
  let fetchApi = () => {
    let apiData = axios("https://api.github.com/users")
    apiData.then((resp) => {
      setgithubData(resp.data)
    })
  }
  useEffect(()=>{
    fetchApi()
  },[])
  console.log(githubData)
  return (
    <div>
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

export default AxiosWithThen