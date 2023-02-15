const express = require('express')
const {connect} = require('./Database/sqlconnective')
const app = express(); 
const port = 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
connect();