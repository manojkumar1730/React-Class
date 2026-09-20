import React from 'react'
import {studentsDb} from './studentDataBase'

const BeStudents = (props) => {
    // console.log(props.bestudentsdb)

    const bestudentsdbArrray=props.bestudentsdb
    // console.log(bestudentsdbArrray)
    return (
        <>
            <div className="be-students">
                

                <div className="container">
                    <table border={1}>
                    <thead>
                        <tr>
                            <th>slno</th>
                            <th>name</th>
                            <th>age</th>
                            <th>place</th>
                            <th>courser</th>
                            <th>yop</th>
                            <th>marks</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        bestudentsdbArrray.map((elm,index)=>{
                            let {name,age,place,course,yop,marks}=elm;
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
            </div>
        </>
    )
}

export default BeStudents