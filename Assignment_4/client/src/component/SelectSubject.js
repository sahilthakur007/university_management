import React, { useEffect, useState } from "react";
import { Paper, TextField, Typography, Box, Stack, Button, Select } from "@mui/material"
// import { margin } from "@mui/system";
// import { studentregister } from "../api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import { SelectChangeEvent } from '@mui/material/Select';

import { useNavigate } from "react-router-dom";
import { getsubject } from "../api";
export default () => {
    const [coursesTaken,setcoursestaken] = useState([]);
    useEffect(()=>{

       const loadsubject = async ()=>{
        const res = await getsubject(1001);
        console.log(res.data.courses);
        setcoursestaken(res.data.courses)
       }
       loadsubject();
    
    },[])
    const navigate = useNavigate(); 
    // const coursesTaken = ["Computer Network", "Data Communication", "Data Structure","Cloud Computing","Advanced Database Systems"]
    const [subject, setSubject] = useState({
        course: "",
    })
    const handleClick = async () => {
        // studentregister(student)
        console.log(subject);
        navigate("/facultyview",{state:subject})
    }
    const handleChange = async (e) => {
        console.log(e.target.name);
        setSubject({ ...subject, [e.target.name]: e.target.value })

    }
    return (
        <>
            <Paper sx={{
                width: "450px",
                padding: "10px",
                ml: "auto",
                mr: "auto",
                mt: "100px"
            }}>
                <Typography variant="h4" sx={{
                    mb: "10px",
                    color: "#ff9800"
                }}>
                    Select Subject
                </Typography>
                <Stack spacing={2} sx={{
                    p:"2%"
                }}>
                    <div>
                        <FormControl sx={{  minWidth: 430 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Course</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={subject.course}
                                name="course"
                                onChange={handleChange}
                                autoWidth
                                label="Course"
                            >
                                {coursesTaken.map((course) => (
                                    <MenuItem value={course}>{course}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                </Stack>
                <Button variant="contained" size="large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt: "15px"
                }} onClick={handleClick}>
                    Select
                </Button>
            </Paper>
        </>
    )
}