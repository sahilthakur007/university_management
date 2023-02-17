import React, { useState } from "react";
import { Paper, TextField, Typography, Box, Stack, Button, Select } from "@mui/material"
// import { margin } from "@mui/system";
// import { studentregister } from "../api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import { SelectChangeEvent } from '@mui/material/Select';
import { studentenroll } from '../api';

export default () => {
    const coursesTaken = ["Computer Networks", "Data Communication", "Data Structure"]
    const [student, setstudent] = useState({
        id: 0,
        course: "",
    })
    const handleClick = async () => {
        // studentregister(student)
        console.log(student);
        studentenroll(student)

    }
    const handleChange = async (e) => {
        console.log(e.target.name);
        setstudent({ ...student, [e.target.name]: e.target.value })

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
                    Enroll Student
                </Typography>
                <Stack spacing={2} sx={{
                    p:"2%"
                }}>
                    <TextField label="student Id" placeholder="Enter student Id" name='id' onChange={handleChange} />
                    <div>
                        <FormControl sx={{  minWidth: 430 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Course</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={student.course}
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
                    Create
                </Button>
            </Paper>
        </>
    )
}