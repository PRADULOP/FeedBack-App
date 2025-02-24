require("dotenv").config()
require("./db/connection")

const express = require('express');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

const morgan = require("morgan")
app.use(morgan('dev'))

const feedbackRoutes = require('./routes/feedback')

app.use('/feedback', feedbackRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

