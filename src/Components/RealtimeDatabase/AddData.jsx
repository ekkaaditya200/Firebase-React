import {getDatabase, ref, set} from "firebase/database";
import { app } from "../../Firebase";
const AddData = () => {
    
    const addDemoData = (userId,name,phone) => {
        console.log(userId,name,phone)
        const db = getDatabase(app)
        set(ref(db,'faculty/'+userId),{
          studentName:name,
          phone
        })
    }
  return (
    <div>
       <h1>Add Demo Data</h1>
       <button className="bg-white bottom-1 rounded-md px-5 py-2" onClick={()=>addDemoData(12,"Aditya Ekka",8976543210)}>Add Data</button>
    </div>
  )
}

export default AddData
