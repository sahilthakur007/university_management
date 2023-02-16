import React, { useState } from "react";
import {Paper,TextField,Typography,Box,Stack,Button} from "@mui/material"
// import { margin } from "@mui/system";
import { facultyregister} from "../api";
export default () => {
    const [faculty, setFaculty] = useState({
        id: 0,
        name: "",
        branch: "",
        salary:0
        
    })
    const handleClick = async () => {
        console.log(faculty);
        facultyregister(faculty)

    }
    const handleChange = async (e) => {
        console.log(e.target.name);
        setFaculty({ ...faculty, [e.target.name]: e.target.value })

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
                    Instructor Info
                </Typography>
                <Stack spacing = {2}>
                    <TextField label= "Instructor Id" placeholder="Enter instructor Id" name ='id' onChange={handleChange}/>
                    <TextField label="name" placeholder="Enter name " name='name' onChange={handleChange} />
                    <TextField label="deparment" placeholder="Enter department name" name='branch' onChange={handleChange} />
                    <TextField label="Salary" placeholder="Enter salary" name='salary' onChange={handleChange} />
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