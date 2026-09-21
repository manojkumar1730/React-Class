import React from 'react'
import StudentData from './StudentData';

const HrData = (props) => {

    let hrData = props.proprityStudent.filter((student) => {
        return student.marks >= 60
       
       
    })


    return (
        <>
            <h1>Hr-Priority-Data</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>name</th>
                        <th>course</th>
                        <th>marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hrData.map((student, index) => {
                            let { name, course, marks } = student
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{course}</td>
                                    <td>{marks}</td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
            <StudentData
                hrData={hrData}
            />
        </>
    )
}

export default HrData