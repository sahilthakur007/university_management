import React, { useEffect } from "react";
import { Paper, Box, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default () => {
    const navigate = useNavigate();
    useEffect(() => {


        const getip = async () => {
            const res = await axios.get("https://api.ipify.org/?format=json")
            console.log(res)
        }
        getip()
    }, [])
    return (<>
        <Typography variant="h3" sx={{
            mt: "5%"
        }}>
            Welcome to University Portal
        </Typography>
        <Box sx={{
            display: "flex",
            justifyContent: "center"
        }}>

            <Paper sx={{
                height: "250px",
                width: "55%",
                mt: "7%"

            }}>

                <Stack direction="row" sx={{
                    mt: "5%"
                }} >
                    <Button sx={{
                        ml: "4%",
                        mr: "4%"
                    }} onClick={() => navigate("/student-registration")}><Box sx={{
                        backgroundColor: "#ff9800",
                        height: "125px",
                        width: "125px",
                        borderRadius: "5%"
                    }}>
                            <Typography sx={{
                                color: "#ffffff",
                                textTransform: "none",
                                fontSize: "22px",
                                verticalAlign: "middle"
                            }}>Register Student</Typography>
                        </Box></Button>
                    <Button sx={{
                        ml: "4%",
                        mr: "4%"
                    }} onClick={() => navigate("instructor-registration")}><Box sx={{
                        backgroundColor: "#ff9800",
                        height: "125px",
                        width: "125px",
                        borderRadius: "5%"
                    }}>
                            <Typography sx={{
                                color: "#ffffff",
                                textTransform: "none",
                                fontSize: "22px",
                                // textAlign: "center",
                                // alignItems:"center"
                            }}>Register Instructor</Typography>
                        </Box></Button>
                    <Button sx={{
                        ml: "4%",
                        mr: "4%"
                    }} onClick={() => navigate("student-enroll")}><Box sx={{
                        backgroundColor: "#ff9800",
                        height: "125px",
                        width: "125px",
                        borderRadius: "5%"
                    }}>
                            <Typography sx={{
                                color: "#ffffff",
                                textTransform: "none",
                                fontSize: "22px"
                            }}>Enroll Student</Typography>
                        </Box></Button>

                    <Button sx={{
                        ml: "4%",
                        mr: "4%"
                    }} onClick={() => navigate("view-report")}><Box sx={{
                        backgroundColor: "#ff9800",
                        height: "125px",
                        width: "125px",
                        borderRadius: "5%"
                    }}>
                            <Typography sx={{
                                color: "#ffffff",
                                textTransform: "none",
                                fontSize: "22px"
                            }}>View Report</Typography>
                        </Box></Button>

                </Stack>

            </Paper>

        </Box>
    </>)
}