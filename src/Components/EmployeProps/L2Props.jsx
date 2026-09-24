import React from 'react'

export const L2Props = (props) => {
const L2propsArray=props.l2emp
    return (
        <>
            <div className="l2-emp">
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
                            L2propsArray.map((employee) => {
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

export default L2Props