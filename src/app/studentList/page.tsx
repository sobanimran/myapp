import Link from "next/link"
const StudentList = () => {
    {const stu = [{
        id : 1,
        name:"soban"
    },
    {
        id : 2,
        name:"mubeen"
    }]}
     return (
        <div>
            <h1>stude List</h1>
            <ul>
                <li><Link href={"/studentList/soban"}>Soban</Link></li>
                <li><Link href={"/studentList/2"}>moiz</Link></li>
               
            </ul>
        </div>
     )
}
export default StudentList;