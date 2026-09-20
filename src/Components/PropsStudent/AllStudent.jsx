import React from 'react'
import { studentsDb } from './studentDataBase'
import BeStudents from './BeStudents';
import BcaStudent from './BcaStudent';
import './Props.css'
import McaStudent from './McaStudent';

const AllStudent = () => {


    let bestudentsdb = studentsDb.filter(student => student.course === "BE")
    // console.log(bestudentsdb)
    let bcaStudent = studentsDb.filter(student => student.course === 'BCA')
    // console.log(bcaStudent);
    let mcsStudent = studentsDb.filter(student => student.course === 'MCA')


    return (
        <>
            <div className="all-studennt">
                <div className="be-student">
                    <h1>BE-Students</h1>
                    <BeStudents
                        bestudentsdb={bestudentsdb} />
                </div>

                <br />

                <div className="bcs-studnet">
                    <h1>BCA-Students</h1>
                    <BcaStudent
                        bcaStudent={bcaStudent}
                    />
                </div>

                <div className="mca-student">
                    <h1>MCA-Students</h1>
                    <McaStudent
                        mcastudent={mcsStudent}
                    />
                </div>
                <br />
                
            </div>
        </>
    )
}




export default AllStudent