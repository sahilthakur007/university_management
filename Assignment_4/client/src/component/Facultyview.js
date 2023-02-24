import React from "react";
import {Paper,Typography,Button, Stack, Box,} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
export default ()=>{
    const navigate = useNavigate(); 
    const {state} = useLocation();
    console.log(state)
    return(<>
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        height:"500px",
        alignItems:"center"
    }}>
    <Paper sx={{
        // width:""
        p:"4%"
    }}>
        <Stack direction="horizontal">
            <Button sx={{
                bgcolor:"orange",
                height:"100px",
                width:"200px",
                color:"#ffffff",
                fontSize:"20px",
                textTransform:"none",
                m:"3%"

            }} onClick={()=>navigate("/createtest",{state:state})}>
                Create Test
            </Button>
            <Button 
            sx={{
                bgcolor:"orange",
                height:"100px",
                width:"200px",
                color:"#ffffff",
                fontSize:"20px",
                textTransform:"none",
                m:"3%"
            }}
            onClick ={()=>navigate("/addquestion",{state:state})}
            >
                 Create Question Set
            </Button>
        </Stack>
    </Paper>
    </Box>
    </>)
}