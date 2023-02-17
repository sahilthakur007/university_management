import React from "react";
import { Typography ,Paper,List,ListItem,Divider,ListItemButton,ListItemText,Box } from "@mui/material"
export default () => {
    const coursesTaken =["Computer Networks","Data Communication","Data Structure"]
    return (<>
        <div style={{
            display: "flex",
            // flexDirection:"column",
            justifyContent: "center",
            // alignItems:"center"
        }}>
        <Paper sx={{
                width: "60%",
                mt:"5%"
            
        }}>
                <Box >
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "left",
                        ml: "4%",
                        mt:"2%"
                    }}>
                        Name:- Divya Kekade

                    </Typography>
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "left",
                        ml: "4%",
                        mt: "2%"
                    }}>
                        Branch:- Computer Science
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
                {coursesTaken.map((course) => (
                    <List>
                        <ListItem>
                            <ListItemButton>

                                <ListItemText
                                    primary={course}
                                />
                            </ListItemButton>
                            {/* <Divider /> */}
                        </ListItem>
                    </List>
                ))}
            </Paper>
        </div>
    </>)
}