import {Link} from "react-router-dom";
import Axios from "axios";

export function StudentListRow(props) {
    const {_id,name,email,rollNo} = props.obj;

    const handleDelete = () => {
        Axios.delete("https://e-school-bkua.onrender.com/studentRoute/delete-student/"+ _id)
        .then(()=>{alert("Successfully deleted"); window.location.reload(); })
        .catch((err)=>alert(()=>alert(err)))
    }
    return (
        <tr class="text-center">
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <Link to={`/edit-student/${_id}`}>
                    <button class="btn btn-success me-4"><i class="fa-regular fa-pen-to-square"></i></button>
                </Link>
                <button onClick={handleDelete} class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}