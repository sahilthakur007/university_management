import React from "react";
import { Paper, TextField, Typography, Box, Stack, Button } from "@mui/material"
import { margin } from "@mui/system";
export default () => {
    return (
        <>
            <Paper sx={{
                width: "450px",
                padding: "10px",
                ml: "auto",
                mr: "auto",
                mt: "100px"
            }}>
                <Typography variant="h4" sx={{
                    mb: "10px",
                    color: "#ff9800"
                }}>
                    Teacher Info
                </Typography>
                <Stack spacing={2}>
                    <TextField label="student Id" placeholder="Enter student Id" />
                    <TextField label="name" placeholder="Enter name " />
                    <TextField label="deparment" placeholder="Enter department name" />
                    <TextField label="credit" placeholder="Enter credit" />
                </Stack>
                <Button variant="contained" size="large" sx={{
                    color: "#ffffff",
                    backgroundColor: "#ff9800",
                    mt: "15px"
                }}>
                    Create
                </Button>
            </Paper>
        </>
    )
}