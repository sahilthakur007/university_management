import axios from "axios"
export const studentlogin = (logininfo) => axios.post("http://localhost:5000/student/login", logininfo);
export const facultylogin = (logininfo) => axios.post("http://localhost:5000/faculty/login", logininfo);
export const getsubject = (id) => axios.get(`http://localhost:5000/faculty/subject/${id}`);
export const sendquestion = (question) => axios.post(`http://localhost:5000/faculty/question`,question);
export const getquestion = (subject) => axios.get(`http://localhost:5000/faculty/getquestion/${subject}`);
export const sendquestionpaper = (paper) => axios.post(`http://localhost:5000/faculty/questionpaper`,paper);
export const getquestionpaperlist = () => axios.get(`http://localhost:5000/faculty/getquestionpaperlist`);
