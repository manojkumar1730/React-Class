import React from 'react'

export const McaStudent = (props) => {
    const mcastudentArray = props.mcastudent;

    return (
        <>
            <div className="mac-student">
                <table border={1}>
                    <thead>
                        <th>slno</th>
                        <th>name</th>
                        <th>age</th>
                        <th>place</th>
                        <th>courser</th>
                        <th>yop</th>
                        <th>marks</th>
                    </thead>
                    <tbody>
                        {
                            mcastudentArray.map((student,index) => {
                                let { name, age, place, course, yop, marks } = student;
                                return(
                                   <tr>
                                    <th>{index+1}</th>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{place}</td>
                                    <td>{course}</td>
                                    <td>{yop}</td>
                                      <td>{marks }</td>
                                </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default McaStudent