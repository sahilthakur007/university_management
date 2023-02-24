import { Paper,Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getquestionpaperlist } from "../api";

export default()=>{
    const navigate = useNavigate();
    const [questionPaper,setquestionpaper] = useState([]);
    useEffect(()=>{
        const getlist = async ()=>{
            const res = await getquestionpaperlist();
            console.log(res.data.activetest)
            const alltest = res.data.activetest;
            let mytest =[];
            for(var i =0 ;i<res.data.activetest.length;i++)
            {
                const test = {
                    name:alltest[i].PAPER_TITLE,
                    duration:alltest[i].DUARTION,
                    subject:alltest[i].SUBJECT,
                    // duration:alltest[0].PAPER_TITLE
                }
                const getvalue = mytest.find((ptest)=>(ptest.name==test.name))
                console.log(getvalue)
                if(!getvalue)
                {   console.log("hi")
                    mytest.push(test);
                }
                // mytest.filter((test))

            }
            setquestionpaper(mytest);
            console.log(mytest);
        }
        getlist();
    },[])
    const handleClick = async (name)=>{

        // console.log(name);
        const res = await getquestionpaperlist();
            console.log(res.data.activetest)
            const alltest = res.data.activetest;
        let question =[]; 
        question = alltest.filter((paper)=>paper.PAPER_TITLE==name)
        console.log(question);
        const paper = {
            name,
            duration: question[0].DUARTION,
            subject: question[0].SUBJECT,
            question
        }
        console.log(paper);
        // navigate("/facultyview",{state:subject})
        navigate("/solvetest",{state:paper})
        }
    
    // const questionPaper =[{
    //     name:"Computer Networks",
    //     duration:"10:10:20",
    //     subject:"CN",
    //     // question:[]
    // },
    // {
    //     name:"Computer Networks",
    //     duration:"10:10:20",
    //     subject:"CN",
    //     // question:[]
    // }]
    return(<>
    <Box  sx={{
        display:"flex",
        justifyContent:"center",
       
    }}>
    <Paper sx={{
        width:"60%",
        mt:"3%"
    }}>
          <Typography variant="h4" sx={{
                    mb: "10px",
                    color: "#ff9800",
                    ml:"40%",
                    fontSize:"40px"
                }}>
                    Active Tests
                </Typography>
{
    questionPaper.map((paper)=>(
        <Paper sx={{
            p:"2%",
            m:"2%"
        }} >
        <Box >
<Box sx={{
    display:"flex",
    justifyContent:"space-between"
}}>
<Box>
<Typography><b>Title: </b>{paper.name}</Typography>
<Typography><b>Subject: </b>{paper.subject}</Typography>
<Typography><b>Duration: </b>{paper.duration}</Typography>
</Box>
<Button variant = "contained" size = "large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt:"15px"
                }} onClick ={()=>handleClick(paper.name)}>
                    Start
                </Button>
</Box>
</Box>
</Paper>
    ))
}
    </Paper>
    </Box>
    </>)
}