const User = require('../models/user');

const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
    new : newUser,
    signUp,
    signIn,
    signOut,
    login,
    profile,
    imgUpload,
    uploading
}

function newUser(req,res) {
    res.render('users/new');
}

function signUp(req,res) {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(SALT_ROUNDS)
    );
    User.create(req.body, function(err, newUser) {
        console.log(newUser);
        res.redirect('/');
    });
}

function signIn(req,res) {
    res.render('users/login');
}

function login (req,res) {
    User.findOne({ username : req.body.username }, function(err, foundUser) {
        if(foundUser === null) {
            res.redirect('/users/signin');
        } else {
            const isMatched = bcrypt.compareSync(req.body.password, foundUser.password);
            if(isMatched) {
                req.session.userId = foundUser._id;
                res.redirect('/users/profile');
            } else {
                res.redirect('/users/signin');
            }
        }
    })
}

function profile(req,res) {
    res.render('users/profile');
}

function signOut(req,res) {
    req.session.destroy(function(err) {
        delete req.user;
        res.redirect('/');
    });
}

function imgUpload(req,res) {
    // console.log(req.body);
    res.render('users/newimage');
}

function uploading(req,res) {
    User.findOneAndUpdate
}