import { useEffect, useState } from "react"
import { app } from "../Firebase";
import { collection, getDocs, getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const FacultyList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(null);

  const getFacultyLists = async () => {
    const db = getFirestore(app);
    const docRef = collection(db, 'faculty')
    const snapshot = await getDocs(docRef)
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setList(data);
  }

  const deleteData = async (id) => {
    const db = getFirestore(app);
    const dataRef = doc(db, 'faculty', id)
    await deleteDoc(dataRef).then(() => {
      getFacultyLists();
      alert("Data Deleted Successfully !")
    }
    ).catch(console.error())
  }

  useEffect(() => {
    getFacultyLists();
  }, [])
  return (
    <div className="flex gap-5 flex-col p-10 justify-center bg-slate-500">
      <h1>Faculty Lists</h1>
      <div>
        {
          list && (
            <div>
              {list.map((val) => {
                return <div className="bg-pink-200 p-3 my-3" key={val.id}>
                  <p>{val.name}</p>
                  <p>{val.phone}</p>
                  <button onClick={() => deleteData(val.id)}>Delete</button>
                  <button onClick={()=>{navigate('/updateFaculty',{state:val})}}>Update</button>
                </div>
              })}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FacultyList
