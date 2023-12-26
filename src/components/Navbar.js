import { Link } from "react-router-dom";
import logo from "../images/E-school logo.png";
export function Navbar() {
    return (
        <div class="navbar navbar-expand-lg bg-dark">
            <Link to="/" class="navbar-brand text-light ms-4"><img class="rounded img-cicrle" height="50" width="55" src={logo} alt="E-school" /> <b>E-School</b></Link>
            <button class="navbar-toggler bg-light me-3" type="button" data-bs-toggle="collapse" data-bs-target="#demo">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="demo">
                <div class="navbar-nav ms-auto">
                    <Link to="/create-student" class="text-light nav-link">Create Student</Link>
                    <Link to="/student-list" class="text-light nav-link">Student List</Link>
                </div>
            </div>
        </div>
    )
}