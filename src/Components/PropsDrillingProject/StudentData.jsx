import React from 'react'

const StudentData = (props) => {
    let stdDB = props.hrData.map((student)=>{
       return student.result="Slected"
    })
  
    return (
        <>
        <h1>Student-data</h1>
            <table border={1}>
                <thead>
                    <th>Slno</th>
                    <th>name</th>
                    <th>result</th>
                </thead>
                <tbody>
                    {
                        stdDB.map((student, index) => {
                            let {name,result}=student;
                            <tr>
                                <th>{index+1}</th>
                                <td>{name}</td>
                                <td>{result}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default StudentData