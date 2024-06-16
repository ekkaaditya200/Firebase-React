import { useState } from "react";
import { app } from '../Firebase'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
const AddFaculty = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore(app);
    const coll = collection(db, 'faculty');
    const docRef = await addDoc(coll,{
      name,
      phone
    })
    console.log(docRef.id);
  }


  return (
    <div>
      <h1>Add Faculty - </h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
export default AddFaculty
