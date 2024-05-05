const express = require('express')  // import express library
const path = require('path')

const indexRouter = require('./routes/index')  // import routes

const app = express()  // create web application server

// dist directory contains HTML, CSS, and JavaScript all packed together for production
const staticFilePath = path.join(__dirname, 'client', 'dist')  // where dist directory is located
const staticFiles = express.static(staticFilePath) // tell Express to serve files as static files
app.use('/', staticFiles)  // tell app to use the static files

app.use('/', indexRouter)  // make routes in index.js available to application

// start server
const server = app.listen(process.env.PORT || 3000, function() {  // use specific port OR 3000
    console.log('Server is running on port ' + server.address().port)
})