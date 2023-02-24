import React, { useState } from "react";
import { RadioGroup, Radio, FormControlLabel,Typography,Checkbox, Paper, Box, TextField, Button, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state)
    const questionPaper = state
    const handleClick = () => {
        //  console.log(question)
        navigate("/feedback");
    }
    const handleChange = (e) => {
        // setquestion({...question,[e.target.name]:e.target.value})
    }
    return (<>
    
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection:"column",
                alignItems:"center"
            }}
        >
             <Typography variant="h4" sx={{
                    mb: "10px",
                    color: "#ff9800"
                }}>
                    <b>{questionPaper.name}</b>
                </Typography>
        {questionPaper.question.map((que)=>(
            <Paper sx={{
                width: "54%",
                mt: "2%",
                p: "2%"
            }}>
                {/* <Stack spacing={2}> */}
                    <Typography>{que.QUESTION}</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={que.OPTION1} control={<Radio />} label={que.OPTION1} />
                        <FormControlLabel value={que.OPTION2} control={<Radio />} label={que.OPTION2}/>
                        <FormControlLabel value={que.OPTION3} control={<Radio />} label={que.OPTION3} />
                        <FormControlLabel value={que.OPTION4}control={<Radio />} label={que.OPTION4} />
                    </RadioGroup>
                {/* </Stack> */}

            </Paper>
        ))}
        <Button variant="contained" size="large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt: "15px",
                    textTransform: "none"
                }} onClick={handleClick} >
                    Submit
                </Button>
        </Box>
    </>)
}