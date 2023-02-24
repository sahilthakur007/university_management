import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './component/Home';
import StudentLogin from './component/StudentLogin';
import FacultyLogin from './component/FacultyLogin';
import Facultyview from './component/Facultyview';
import CreateTest from './component/CreateTest';
import SelectSubject from './component/SelectSubject';
import AddQuestion from './component/AddQuestion';
import StudentView from './component/StudentView';
import Test from './component/Test';
import Feedback from './component/Feedback';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/studentlogin" element={<StudentLogin/>}/>
      <Route path="/facultylogin" element={<FacultyLogin/>}/>
      <Route path="/facultyview" element={<Facultyview/>}/>
      <Route path="/createtest" element={<CreateTest/>}/>
      <Route path="/selectsubject" element={<SelectSubject/>}/>
      <Route path="/addquestion" element={<AddQuestion/>}/>
      <Route path="/studentview" element={<StudentView/>}/>
      <Route path="/solvetest" element={<Test/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
    </Routes>
    </>
  );
}

export default App;
