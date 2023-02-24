import React from "react";
import { Box,Paper,Typography } from "@mui/material";
export default () => {
    return(
        <>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Paper sx={{width:"50%",display:"flex",flexDirection:"column",alignItems:"center",mt:'10%'}}>
                    <Typography sx={{color:"orange",fontSize:'40px'}}>Thank You for attempting the test!</Typography>
                    <Typography sx={{mt:'2%',fontSize:"20px"}}>Your score: <b>28/30</b></Typography>
                </Paper>
            </Box>
        </>
    )
}