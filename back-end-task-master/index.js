const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express
const app = express();

//connect to monogodb
mongoose.connect('mongodb://localhost/usergo');//needs correction
mongoose.Promise = global.Promise;

//body-parser middleware
app.use(bodyParser.json());

//initializing routes
app.use(routes);

//error handler middleware
app.use(function (err, req, res, next) {
    res.status(422).send(err.message);
})

//listening for requests
app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});