import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

export const studentregister = (studentinfo) => API.post("/register/registerstudent", studentinfo);
export const facultyregister = (teacherinfo) => axios.post("http://localhost:5000/register/registerinstructer", teacherinfo);
export const studentenroll = (studentinfo) => axios.post("http://localhost:5000/register/enroll", studentinfo);
