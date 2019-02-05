const express = require('express');
const router = express.Router();
const User = require('../models/users');

//get the list of all users from the database
router.get('/getAll', function (req, res, next) {
    User.find({}).then(function (users) {
        res.send(users);
    });
});

//get a user by its id
router.get('/getById/:id',function(req,res,next){
    User.findOne({}).then(function (user) {
        res.send(user);
    });
});

// To get all the entries in your database with at least one attribute
//this router isn't functional
/*router.get('/a/', function (req, res,next) {
    User.find({}).then(function(users){
        res.send();
    });
});*/


//add a new user in the database
router.post('/add', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

//update a user details in the database
router.put('/edit/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
    });
});

//delete a ninjs from the database
router.delete('/deleteById/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    });
});

module.exports = router;