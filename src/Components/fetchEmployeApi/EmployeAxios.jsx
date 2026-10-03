import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeAxios = () => {
    let [empApi, setEmpApi] = useState([])

    let fetchEmpApi = async () => {
        try {
            let empApi = await axios("http://localhost:4000/employee")
            setEmpApi(empApi.data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            console.log("Api Fetching successfully...")
        }
    }

    useEffect(() => {
        fetchEmpApi()
    }, [])


    return (
        <div>
            <h1>Fetching Employee data using axios method with async await</h1>
            <table border={1} >
                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>YOP</th>
                        <th>LOCATION</th>
                        <th>DOB</th>
                        <th>ROLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empApi.map((emp,index) => {
                            let { id, name, course, yop, place, dob, role } = emp
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{course}</td>
                                    <td>{yop}</td>
                                    <td>{place}</td>
                                    <td>{dob}</td>
                                    <td>{role}</td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default EmployeAxios