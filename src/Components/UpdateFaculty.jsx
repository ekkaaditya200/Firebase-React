import { useState } from "react";
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { app } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
const UpdateFaculty = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState(location.state.name);
    const [phone, setPhone] = useState(location.state.phone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const dataRef = doc(db, 'faculty', location.state.id)
        await updateDoc(dataRef, {
            name,
            phone
        }).then(() => {
            console.log("Updated")
            navigate('/facultyList');
        }).catch(console.error());
    }


    return (
        <div>
            <h1>Updat Faculty - </h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateFaculty
