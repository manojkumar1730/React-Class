import React, { use, useEffect, useState } from 'react'
import './stdDetails.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

const StudentDetails = () => {
  let [apiData, setApiData] = useState([])

  let fetchApi = async () => {
    try {
      let respData = await fetch("http://localhost:4000/students")
      let respArray = await respData.json()
      setApiData(respArray)
    }
    catch (error) {
      console.log("Data not found..")
    }
    finally {
      console.log("Done")
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])


  let viewDetail = (name, age) => {
    alert(`${name} age is ${age}`)
  }

  let deleteStdDetails = async (id) => {
    //temprovary

    // let filteredArray = apiData.filter((elem) => {
    //   return elem.id !== id


    // })
    // setApiData(filteredArray)


    //permanent change
    try {
      let bool = window.confirm(`Do you want to delet..`)
      if (bool) {
        let fetchData = await fetch(`http://localhost:4000/students/${id}`, {
          method: "DELETE"
        })
        await fetchData.json()
        alert(`Student data is   deleted`)
        window.location.reload()
      }
      else {
        alert(`Student Data is not deleted.`)
      }
    }
    catch (erroe) {
      console.log("Data Not Found..")
    }

  }

  return (
    <>
      <div className="student-management">
        <h1>Studemt Details</h1>
        <div className="container">
          <table border={1}>
            <thead>
              <tr>
                <th>slno</th>
                <th>Student Name</th>
                <th>DOB</th>
                <th>course</th>
                <th>yop</th>
                <th>marks</th>
                <th>Age</th>
                <th>View Details</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                apiData.map((std, index) => {
                  let { id, name, dob, course, yop, marks } = std
                  let age = new Date().getFullYear() - dob.slice(0, 4)
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{dob}</td>
                      <td>{course}</td>
                      <td>{yop}</td>
                      <td>{marks}</td>
                      <td>{age}</td>
                      <td>
                        <button onClick={() => viewDetail(name, age)}>
                          <RemoveRedEyeIcon />
                        </button>
                      </td>
                      <td>
                        <button className='btnd' onClick={() => deleteStdDetails(id)}>
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default StudentDetails