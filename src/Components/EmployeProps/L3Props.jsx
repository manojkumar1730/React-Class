import React from 'react'

const L3Props = (props) => {
const L3PropsArray=props.l3emp
  return (
    <>
    <div className="l3-emp">
                <table>
                    <thead>
                        <tr>
                            <th>{id}</th>
                            <th>{name}</th>
                            <th>{course}</th>
                            <th>{yop}</th>
                            <th>{place}</th>
                            <th>{dob}</th>
                            <th>{role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            L3PropsArray.map((employee) => {
                                let { id, name, course, yop, place, dob, role } = employee
                                return (
                                    <tr>
                                        <th>{id}</th>
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
    </>
  )
}

export default L3Props