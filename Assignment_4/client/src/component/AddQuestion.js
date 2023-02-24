import React, { useState } from "react";
import { FormGroup,FormControlLabel,Checkbox,Paper,Box, TextField, Button, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { sendquestion } from "../api";


export default()=>{
    const {state} = useLocation();
    const [question,setquestion] = useState({
        title:"",
        op1:"",
        op2:"",
        op3:"",
        op4:"",
        ans:"",
        sub:state.course

    })
    const handleClick = async()=>{
     console.log(question)
     await sendquestion(question);

    }
    const handleChange = (e)=>{
setquestion({...question,[e.target.name]:e.target.value})
    }
    return(<>
    <Box
    sx={{
        display:"flex",
        justifyContent:"center",
       
    }}
    >
    <Paper sx={{
        width:"54%",
        mt:"10%",
        p:"2%"
    }}>
     <Stack spacing={2}>
        <TextField label="Question" placeholder="Enter question" name="title" multiline="true" onChange={handleChange}
/>

        <Stack direction="horizontal" spacing={3}>
        <TextField label="Option 1" placeholder="Enter Option1" name="op1" sx={{
            mr:"5%",
            width:"50%"
        }} onChange={handleChange}/>
        <TextField label="Option 2" placeholder="Enter Option2" name="op2" sx={{
            // mr:"20%",
            width:"50%"
        }} onChange={handleChange}/>

        </Stack>
        <Stack direction="horizontal" spacing={3}>
        <TextField label="Option 3" placeholder="Enter Option3" name="op3" sx={{
            mr:"5%",
            width:"50%"
        }} onChange={handleChange}/>
        <TextField label="Option 4" placeholder="Enter Option4" name="op4" sx={{
            // mr:"20%",
            width:"50%"
        }} onChange={handleChange}/>
        </Stack>
        <TextField label="Answer" placeholder="Enter Answer" name="ans" onChange={handleChange}/>

    </Stack> 
    <Button variant = "contained" size = "large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt:"15px",
                    textTransform:"none"
                }} onClick ={handleClick} >
                    Add Question
                </Button>     
    </Paper>
    </Box>
    </>)
}