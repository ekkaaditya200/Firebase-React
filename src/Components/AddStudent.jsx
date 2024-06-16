import { useState } from "react";
import { getDatabase, ref, set } from 'firebase/database';
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    console.log(name, phone);
    set(ref(db, 'student/' + rollno), {
      rollno,
      name,
      phone
    }).then(() => {
      navigate('/studentList')
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <h1>Add Student - </h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setRollno(e.target.value)} type="text" placeholder="Roll No" />
        <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddStudent
