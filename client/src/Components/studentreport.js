import React, { useEffect, useState } from "react";
import { Typography, Paper, List, ListItem, Divider, ListItemButton, ListItemText, Box } from "@mui/material"
import { useLocation } from "react-router-dom";
import { generateReport } from "../api";
import { getData } from "../helper";
export default () => {
    const { state } = useLocation();
    console.log(state)
    const [isloading, setisloading] = useState(false);
    const [user, setuser] = useState({});
    useEffect(() => {
        setisloading(true);
        const getRes = async () => {

            const res = await generateReport({ id: state });
            // console.log(res.data.data.courses[0]);
            console.log(res);
            setuser(res.data.data)
        }
        getRes();
        setisloading(false)
    }, [])
    // console.log(user);
    const coursesTaken = ["Computer Networks", "Data Communication", "Data Structure"]
    return (<>
        <div style={{
            display: "flex",
            // flexDirection:"column",
            justifyContent: "center",
            // alignItems:"center"
        }}>
            <Paper sx={{
                width: "60%",
                mt: "5%"

            }}>
                <Box >
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "left",
                        ml: "4%",
                        mt: "2%"
                    }}>
                        Name:- {user.name}

                    </Typography>
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "left",
                        ml: "4%",
                        mt: "2%"
                    }}>
                        Branch:- {user.department}
                        {/* Course:-  */}
                    </Typography>
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "left",
                        ml: "4%",
                        mt: "2%"
                    }}>
                        Courses Enroll:-
                    </Typography>
                </Box>

                <List>
                    {isloading ? <Typography>Loading</Typography> : user.courses?.map((course) => (

                        <ListItem>
                            <ListItemButton>

                                <ListItemText
                                    primary={course}
                                />
                            </ListItemButton>

                        </ListItem>

                    ))
                    }
                </List>

            </Paper>
        </div>
    </>)
}