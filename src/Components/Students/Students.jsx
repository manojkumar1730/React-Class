import {studentsData} from './studentsData';
import './Students.css';

const Students = ()=>{
    console.log(studentsData);
    return(
        <>
            <div className='students'>
                <h1>Student Database</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Student Name</th>
                            <th>Course</th>
                            <th>Year Of Passout</th>
                            <th>Place</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentsData.map((student,index)=>{
                                let {name , course,yop ,place ,dob} = student;
                                let date = new Date();
                                let birthYear = dob.slice(0,4);
                                
                                let age = date.getFullYear() - birthYear;
                                return(
                                    <tr key={index}>
                                        <th>{index+1}</th>
                                        <td>{name}</td>
                                        <td>{course}</td>
                                        <td>{yop}</td>
                                        <td>{place}</td>
                                        <td>{dob}</td>
                                        <td>{age}</td>
                                        {/* <td>{new Date().getFullYear() - dob.slice(0,4)}</td> */}
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

export default Students;