import { useEffect, useState } from "react"
import { getDatabase, onValue, ref, remove } from 'firebase/database'
import { app } from '../Firebase'
import { useNavigate } from "react-router-dom";
const StudentList = () => {
  const [list, setList] = useState(null);
  const navigate = useNavigate();
  const getStudentList = () => {
    const db = getDatabase(app);
    const studentRef = ref(db, 'student')
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setList(data);
    })
  }
  const deleteStudent = (key) => {
    const db = getDatabase(app);
    const studentRef = ref(db, 'student/' + key);
    remove(studentRef);
  }
  // console.log(list);
  useEffect(() => {
    getStudentList();
  }, [])
  return (
    <div className="flex gap-5 flex-col p-10 justify-center bg-slate-500">
      <h1>Student Lists</h1>
      <div>
        {
          list && (
            <div>
              {Object.entries(list).map(([key, val]) => {
                return <div className="bg-pink-200 p-3 my-3" key={key}>
                  <p>{val.rollno}</p>
                  <p>{val.name}</p>
                  <p>{val.phone}</p>
                  <button onClick={() => deleteStudent(key)}>Delete</button>
                  <button onClick={() => navigate('/updateStudent',{state:[key, val]})}>Update</button>
                </div>
              })}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default StudentList
