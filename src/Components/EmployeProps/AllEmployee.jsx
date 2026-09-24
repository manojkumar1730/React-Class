import React from "react"
import { employeesData } from './employeData'
import L1Props from "./L1Props"
import L2Props from "./L2Props"
import L3Props from "./L3Props"

export const AllEmployee = () => {

    let l1emp = employeesData.filter((emp) => {
        return emp.role === "L1";
    })

    let l2emp = employeesData.filter((emp) => {
        return emp.role === "L2"
    })

    let l3emp = employeesData.filter((emp) => {
        return emp.role === "L3"
    })


    return (
        <>
            <div className="all-emp">
                <h1>L1-EMPLOYEE</h1>
                <L1Props
                    l1emp={l1emp}
                />


                <br />

                <h1>L2-EMPLOYEE</h1>
                <L2Props
                    l2emp={l2emp}
                />

                <br />

                <h1>L3-EMPLOYEE</h1>
                <L3Props
                    l3emp={l3emp}
                />


            </div>

        </>
    )
}

export default AllEmployee