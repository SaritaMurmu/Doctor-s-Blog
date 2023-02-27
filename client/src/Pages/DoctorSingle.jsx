import { useLocation } from "react-router-dom"
import Doctorinfo from "../Component/DoctorSingle/Doctorinfo"
import Header from "../Component/DoctorSingle/Header"
import Qualification from "../Component/DoctorSingle/Qualification"
import Skills from "../Component/DoctorSingle/Skills"
import Title from "../Component/DoctorSingle/Title"

const DoctorSingle = () => {
    const docData=useLocation().state
    console.log(docData)
    return (
        <div>
           <Header/>

            <Title name={docData.docName}/>

            <Doctorinfo name={docData.docName} deptName={docData.department.deptName}/>

            <Qualification qua={docData.qualification}/>

            <Skills skill={docData.skill} exp={docData.expertise}/>


        </div>
    )
}

export default DoctorSingle