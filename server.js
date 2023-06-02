const express = require('express')
const colors = require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');

// env config
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server running'
    })
})

// port
const PORT = process.env.PORT || 5000

// listening
app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_MODE} mode on port http://localhost:${PORT}`
        .bgCyan.white
    );
})