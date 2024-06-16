import { useState } from "react";
import { getDatabase, ref, update } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [file, setFile] = useState(null);
  const [rollno, setRollno] = useState(location.state[1].rollno);
  const [name, setName] = useState(location.state[1].name);
  const [phone, setPhone] = useState(location.state[1].phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const db = getDatabase(app);
      const studentRef = ref(db, 'student/' + location.state[0])

      const storage = getStorage(app);
      const myRef = storageRef(storage, `images/${location.state[0]}`)
      await uploadBytes(myRef, file);
      const imageUrl = await getDownloadURL(myRef)

      update(studentRef, {
        rollno,
        name,
        phone,
        imageUrl
      }).then(() => {
        alert("Student Data Updated Successfully !");
        navigate('/studentList')
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      const db = getDatabase(app);
      const studentRef = ref(db, 'student/' + location.state[0])

      update(studentRef, {
        rollno,
        name,
        phone,
      }).then(() => {
        alert("Student Data Updated Successfully !");
        navigate('/studentList')
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }
  return (
    <div>
      <h1>Updat Student - </h1>
      <form onSubmit={handleSubmit}>
        <input value={rollno} onChange={(e) => setRollno(e.target.value)} type="text" placeholder="Roll No" />
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />
        <input onChange={handleFile} type="file" placeholder="Result" />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateStudent
