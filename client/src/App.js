import './App.css';
import StudentRegistration from "./Components/studentregistration"
import FacultyRegistration from "./Components/facultyregistration"
import Studentreport from './Components/studentreport';
import {Routes,Route} from "react-router-dom"
import EnrollStudent from './Components/enrollStudent';
import Home from "./Components/home"
import Getreportdetails from './Components/getreportdetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/view-report" element={<Getreportdetails/>} />
        <Route path="/instructor-registration" element={<FacultyRegistration />} />
        <Route path="/student-report" element={<Studentreport />} />
        <Route path="/student-enroll" element={<EnrollStudent />} />
      </Routes>
    </div>
  );
}

export default App;
