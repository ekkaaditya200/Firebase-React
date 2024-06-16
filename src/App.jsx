import AddStudent from './Components/AddStudent';
import Dashboard from './Components/Dashboard';
import StudentList from './Components/StudentList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UpdateStudent from './Components/UpdateStudent';
import AddFaculty from './Components/AddFaculty';
import FacultyList from './Components/FacultyList';
import UpdateFaculty from './Components/UpdateFaculty';
const myRouter = createBrowserRouter([
  {
    path: '', Component: Dashboard, children: [
      { path: '', Component: StudentList },
      { path: 'addStudent', Component: AddStudent },
      { path: 'studentList', Component: StudentList },
      { path: 'updateStudent', Component: UpdateStudent },
      { path: 'addFaculty', Component: AddFaculty },
      { path: 'facultyList', Component: FacultyList },
      { path: 'updateFaculty', Component: UpdateFaculty },
    ]
  }
])
export default function App() {
  return (
    <>
      <RouterProvider router={myRouter}>

      </RouterProvider>
    </>
  )
}