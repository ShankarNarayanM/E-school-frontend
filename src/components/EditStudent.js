import { useEffect, useState } from "react";
import { StudentForm } from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Navbar } from "./Navbar";
import { Footer } from "./HomePage/Footer";

export function EditStudent() {
    const [initialValues, setInitialValues] = useState({ name: "", email: "", rollNo: "" });
    const [formValues, setFormValues] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Axios.get("https://e-school-bkua.onrender.com/studentRoute/update-student/" + id)
            .then((msg) => setInitialValues(msg.data))
            .catch((err) => alert(err));
    }, [id])
    const getState = (child) => {
        setFormValues(child)
    }

    const handleSubmit = () => {
        const newData = { name: formValues[0], email: formValues[1], rollNo: formValues[2] };
        Axios.put("https://e-school-bkua.onrender.com/studentRoute/update-student/" + id, newData)
            .then(() => {alert("Successfully updated"); window.location.assign("/#/student-list")})
            .catch((err) => alert(err));
    }
    return (
        <div>
            <Navbar />
            <form class="py-5" onSubmit={handleSubmit}>
                <StudentForm getState={getState} obj={initialValues}>
                    Update Student
                </StudentForm>
            </form>
            <Footer />
        </div>
    )
}