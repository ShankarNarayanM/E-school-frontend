import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Createstudent } from "./components/CreateStudent";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StudentList } from "./components/StudentList";
import { EditStudent } from "./components/EditStudent";
import { HomePage } from "./components/HomePage/HomePage";
function App() {
  return (
    <div class="mx-2">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-student" element={<Createstudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
