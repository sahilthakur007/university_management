import React, { useEffect, useState } from "react";
import { FormGroup,FormControlLabel,Checkbox,Paper,Box, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getquestion, sendquestionpaper } from "../api";

// var questions = ["Explain mern stack Architecture",
// "what is React"
// ]
export default()=>{
    const {state} = useLocation();
    // console.log(state);
    const [questionlist,setquestionlist] = useState([])
    const [questions,setquestions] = useState([])
    
    const [questionPaper,setquestionpaer] = useState({
        name:"",
        duration:0,
        question:[],
        subject:state.course
    })
    useEffect(()=>{
        const loadquestion = async()=>{
            const res = await getquestion(state.course);
            console.log(res.data.question);
            setquestions(res.data.question);
        }
        loadquestion()
    },[])
    const handlename = (e)=>{
        console.log(e.target.name)
        setquestionpaer({...questionPaper,[e.target.name] :e.target.value})
    }
    console.log(questions);
    const handlequestion = (e)=>{
        console.log(e.target.value)
        if(e.target.checked)
        {    
            // console.log("hi");
             questionlist.push(e.target.value)
            // setquestionlist(...questionlist,e.target.value)
        }
        else{
            const modifiedList = questionlist.filter((question)=>question!=e.target.value)
            setquestionlist(modifiedList)
        }
    }
    const handleClick = async()=>{

        // console.log(questionlist)
        let nq;
        let finallist =[];
        questionlist.map((question)=>(
                nq = questions.find((questionv)=>(questionv.QUESTION==question)),
            finallist.push(nq)
        ))
        setquestionpaer({...questionPaper,["question"]:finallist})

        console.log(finallist)
        // const allquestion = 
        // console.log();
        await sendquestionpaper(questionPaper);
    }
    console.log(questionPaper);

    return(<>
    <Box sx={{
        display:"flex",
        justifyContent:"center"
    }}>
    <Paper 
    
    sx={{
        width:"75%",
        p:"2%"
    }}>
        <TextField onChange={handlename} title="Title Of Question Paper"placeholder="Enter Title for question paper" name ="name" sx={{
            width:"80%"
        }} />
        <TextField type="number" onChange={handlename} title="Duration"placeholder="Enter Duration" name ="duration" sx={{
            width:"15%",
            ml:"5%"
        }} />
    <FormGroup>
      {questions.map((question)=>(
      <FormControlLabel  onChange={handlequestion}  label={question.QUESTION} control={<Checkbox size="100px" name= "question" value={question.QUESTION} />}/>
      ))}
    </FormGroup>
    <Button variant = "contained" size = "large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt:"15px"
                }} onClick ={handleClick}>
                    Save Question Paper
    </Button>
    </Paper>
    </Box>
    </>)
}