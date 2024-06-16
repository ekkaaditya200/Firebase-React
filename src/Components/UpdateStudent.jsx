import { useState } from "react";
import { getDatabase, ref, update } from 'firebase/database';
import { app } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [rollno, setRollno] = useState(location.state[1].rollno);
  const [name, setName] = useState(location.state[1].name);
  const [phone, setPhone] = useState(location.state[1].phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const studentRef = ref(db,'student/'+location.state[0])
    update(studentRef,{
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
      <h1>Updat Student - </h1>
      <form onSubmit={handleSubmit}>
        <input value={rollno} onChange={(e) => setRollno(e.target.value)} type="text" placeholder="Roll No" />
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateStudent
