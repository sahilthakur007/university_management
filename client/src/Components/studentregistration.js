import React, { useState } from "react";
import {Paper,TextField,Typography,Box,Stack,Button} from "@mui/material"
// import { margin } from "@mui/system";
import { studentregister} from "../api";
export default () => {
    const [student, setstudent] = useState({
        id: 0,
        name: "",
        branch: "",
        credit:0
        
    })
    const handleClick = async () => {
        console.log(student);
        studentregister(student)

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
                mt:"100px"
            }}>
                <Typography variant="h4" sx={{
                    mb: "10px",
                    color: "#ff9800"
                }}>
                    Student Info
                </Typography>
                <Stack spacing = {2}>
                    <TextField label= "student Id" placeholder="Enter student Id" name ='id' onChange={handleChange}/>
                    <TextField label="name" placeholder="Enter name " name='name' onChange={handleChange} />
                    <TextField label="deparment" placeholder="Enter department name" name='branch' onChange={handleChange} />
                    <TextField label="credit" placeholder="Enter credit" name='credit' onChange={handleChange} />
                </Stack>
                <Button variant = "contained" size = "large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt:"15px"
                }} onClick ={handleClick}>
                    Create
                </Button>
            </Paper>
        </>
    )
}