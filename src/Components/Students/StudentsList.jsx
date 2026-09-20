import React from "react"
import { studentsData } from './studentsData'
import Students from "./Students";

const StudentsList = () => {



    let viewMore = (studentName, studentPlace) => {
        alert(`${studentName} is from ${studentPlace}`);
    }

    let deleteInfo = (studentName) => {
        let updatedList = studentsData.filter(s => s.name != studentName);
        alert(`${updatedList}`);
    };

    

    return (
        <>
            <div className="students-list">
                <h1>Studnets List</h1>

                <ul>
                    {
                        studentsData.map((student, index) => {
                            let { name, place } = student;
                            return (
                                <li key={index}>
                                    {index + 1}. {name}
                                    <button onClick={() => viewMore(name, place)}>
                                        view More
                                    </button>

                                    <button onClick={() => deleteInfo(name)}>
                                        Delete info
                                    </button>
                                </li>
                            )
                        }
                        )}

                </ul>
            </div>
        </>
    )
}

export default StudentsList
