import React, { useState } from "react";
import {Paper,TextField,Typography,Box,Stack,Button} from "@mui/material"
// import { margin } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { facultylogin } from "../api";
export default () => {
    const navigate = useNavigate();
    const [faculty, setFaculty] = useState({
        id: "",
        password: ""
        
    })
    const handleClick = async () => {
        facultylogin(faculty);
      navigate("/selectsubject")

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
                    Instructor Login
                </Typography>
                <Stack spacing = {2}>
                    <TextField label= "Instructor Id" placeholder="Enter Id" name ='id' onChange={handleChange}/>
                    <TextField label="Password" placeholder="Enter Password " name='password' onChange={handleChange} />

                </Stack>
                <Button variant = "contained" size = "large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt:"15px"
                }} onClick ={handleClick}>
                    Login
                </Button>
            </Paper>
        </>
    )
}