// routes
const express = require('express')  // import express library
const router = express.Router()  // this router object does the routing - based on URL and method
const randomWYRQuestion = require('../model/wyr_questions')  // import function to get random question

// GET request to home page
router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})

// GET request to wyr page
router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Dance or Sing?',
    //     'answer1': 'Dance',
    //     'answer2': 'Sing'
    // }

    const wyr = randomWYRQuestion()  // call function to get a random question

    res.json(wyr)  // send json response with wyr object
})

module.exports = router // make router available to any files that import it