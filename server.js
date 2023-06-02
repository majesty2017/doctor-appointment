const express = require('express')
const colors = require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// env config
dotenv.config()

// mongodb connection
connectDB()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/user/', require('./routes/UserRoute')) // user auth route

// port
const PORT = process.env.PORT || 9001

// listening
app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_MODE} mode on port http://localhost:${PORT}`
        .bgCyan.white
    );
})