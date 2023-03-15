import React, { useState } from "react";
import {Paper,TextField,Typography,Box,Stack,Button} from "@mui/material"
// import { margin } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { studentlogin } from "../api";
export default () => {
    const [student, setStudent] = useState({
        prn: "",
        password: ""
        
    })
    const navigate = useNavigate()
    const handleClick = async () => {
      studentlogin(student);
 navigate("/studentview")
    }
    const handleChange = async (e) => {
        console.log(e.target.name);
        setStudent({ ...student, [e.target.name]: e.target.value })

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
                    Student Login
                </Typography>
                <Stack spacing = {2}>
                    <TextField label= "PRN" placeholder="Enter PRN" name ='prn' onChange={handleChange}/>
                    <TextField label="Password" type="password"placeholder="Enter Password " name='password' onChange={handleChange} />

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