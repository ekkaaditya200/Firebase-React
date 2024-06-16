import { useState } from "react";
import { getDatabase, ref, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const storage = getStorage(app);
    const myRef = storageRef(storage,`images/${rollno}`)
    await uploadBytes(myRef,file);
    const imageUrl = await getDownloadURL(myRef)

    const db = getDatabase(app);
    set(ref(db, 'student/' + rollno), {
      rollno,
      name,
      phone,
      imageUrl
    }).then(() => {
      alert("Student Data saved Successfully !");
      navigate('/studentList')
    }).catch(error => {
      console.log(error)
    })
  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }
  return (
    <div>
      <h1>Add Student - </h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setRollno(e.target.value)} type="text" placeholder="Roll No" />
        <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />
        <input onChange={handleFile} type="file" placeholder="Result" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddStudent
