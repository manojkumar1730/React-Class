import React from 'react'

const Trainer = () => {
    let proprityStudent = [
        { name: "Dinga", course: "JFS", marks: 75 },
        { name: "Dingi", course: "JFS", marks: 65 },
        { name: "minga", course: "PFS", marks: 55 }
    ]
    return (
        <>
            <ul>
                {
                    proprityStudent.map((student) => {
                        let { name, course, marks } = student;
                        return(
                            <li>name={name}course={course}marks={marks}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Trainer

