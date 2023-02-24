const express = require('express')
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const studentRouter = require("./Routers/studentrouter")
const facultyRouter = require("./Routers/facultyRouter")
const port = 5000
app.use(cors());
app.use(bodyParser.urlencoded({extended:true,limit:"25mb"}))
app.use(bodyParser.json({extended:true,limit:"25mb"}))
app.use("/student",studentRouter);
app.use("/faculty",facultyRouter);
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
// connect();