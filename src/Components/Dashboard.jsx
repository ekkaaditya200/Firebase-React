import { Link, Outlet } from "react-router-dom"
const Dashboard = () => {
  return (
    <div className="flex flex-row ">
      <div className="bg-yellow-200 w-[30%] h-screen flex gap-3 flex-col">
        <Link to='/addStudent'>Add Student</Link>
        <Link to='/studentList'>Student List</Link> 
        <Link to='/addFaculty'>Add Faculty</Link> 
        <Link to='/facultyList'>Faculty List</Link> 
      </div>
      <div className="w-[70%] h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
