import { Button, Paper, Stack, TextField,Box } from "@mui/material";
import React, { useState } from "react";

export default () => {
    const [id, setid] = useState(0); 
    const handleChange = (e) => {
        setid(e.target.value); 
    }
    const handleClick = () => {
        console.log(id); 
    }
    return (<>
        
        <Box sx={{
            display: "flex",
            justifyContent:"center"
        }}>
        <Paper sx={{
                width: "40%",
            mt:"10%"
            
        }}>
                <Stack spacing={3} sx={{
                m:"5%"
            }}>
                    <TextField type="number" placeholder="Enter studet id" label="student id" name="id" value={id} onChange={handleChange} />

                    <Box>
                        <Button onClick={handleClick} sx={{
                            bgcolor: "#ff9800",
                            color: "#ffffff",
                            width:"30%"
                        }}>
                            View Result
                        </Button>
                    </Box>
            </Stack>
            </Paper>
        </Box>
    </>)
}