const express = require('express')  // import express library

const indexRouter = require('./routes/index')  // import routes

const app = express()  // create web application server

app.use('/', indexRouter)  // make routes in index.js available to application

// start server
const server = app.listen(process.env.PORT || 3000, function() {  // use specific port OR 3000
    console.log('Server is running on port ' + server.address().port)
})