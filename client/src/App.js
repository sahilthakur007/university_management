import './App.css';
import StudentRegistration from "./Components/studentregistration"
import FacultyRegistration from "./Components/facultyregistration"
import Studentreport from './Components/studentreport';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentRegistration />} />
        <Route path="/faculty-registration" element={<FacultyRegistration />} />
        <Route path="/student-report" element={<Studentreport />} />
      </Routes>
    </div>
  );
}

export default App;
