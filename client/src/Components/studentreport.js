import React from "react";
import { Typography ,Paper,List,ListItem,Divider,ListItemButton,ListItemText } from "@mui/material"
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
            <Typography>
                Name:- Divya Kekade

            </Typography>
            <Typography>
                Branch:- Computer Science
                {/* Course:-  */}
                </Typography>
                <Typography>
                    Courses
                </Typography>
                {coursesTaken.map((course) => (
                    <List>
                        <ListItem>
                            <ListItemButton>

                                <ListItemText
                                    primary={course}
                                />
                            </ListItemButton>
                            <Divider />
                        </ListItem>
                    </List>
                ))}
            </Paper>
        </div>
    </>)
}