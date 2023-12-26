import { useState } from "react";
import { StudentForm } from "./StudentForm";
import Axios from "axios";
import { Navbar } from "./Navbar";
import {Footer} from "../components/HomePage/Footer";

export function Createstudent() {
    const [initialValues] = useState({ name: "", email: "", rollNo: "" });
    const [formValues, setFormValues] = useState([]);
    const getState = (child) => {
        setFormValues(child);
    }

    const handleSubmit = () => {
        const data = { name: formValues[0], email: formValues[1], rollNo: formValues[2] };
        Axios.post("https://e-school-bkua.onrender.com/studentRoute/create-student", data)
            .then(() => {alert("Successfully created"); window.location.assign("/#/student-list")})
            .catch((err) => alert(() => alert(err)))
    }
    return (
        <div>
            <Navbar />
            <form class="py-5" onSubmit={handleSubmit}>
                <StudentForm getState={getState} obj={initialValues}>
                    Create Student
                </StudentForm>
            </form>
            <Footer />
        </div>

    )
}