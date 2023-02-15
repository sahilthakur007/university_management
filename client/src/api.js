import axios from 'axios'

export const studentregister = (studentinfo) => axios.post("https://localhost:5000/register/registerstudent", studentinfo);
export const facultyregister = (teacherinfo) => axios.post("https://localhost:5000/register/registerinstructer", teacherinfo);
