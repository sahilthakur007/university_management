const bodyParser = require('body-parser');
const express = require('express')
const { connect } = require('./Database/sqlconnective')
const app = express();
const cors = require('cors');
const allrouter = require("./routers/allrouters")
const port = 5000
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }))
app.use(bodyParser.json({ limit: "25mb", extended: true }))
app.use(cors());
app.use("/register", allrouter)
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
// connect();