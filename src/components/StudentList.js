import { useEffect, useState } from "react";
import Axios from "axios";
import { StudentListRow } from "./StudentListRow";
import { Navbar } from "./Navbar";
import { Footer } from "./HomePage/Footer";

export function StudentList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://e-school-bkua.onrender.com/studentRoute")
            .then((msg) => setData(msg.data))
            .catch((err) => alert(err));
    }, [])

    const ListItems = () => {
        return data.map((val, ind) => {
            return <StudentListRow obj={val} key={ind} />
        })
    }
    return (
        <div class="bg-info">
            <Navbar />
            <table class="table table-dark table-striped table-bordered" style={{ maxWidth: "500px", margin: "10px auto" }}>
                <thead>
                    <tr class="text-center">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll No</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {ListItems()}
                </tbody>
            </table>
            <Footer />
        </div>
    )
}