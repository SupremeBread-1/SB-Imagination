const User = require('../models/user');

const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

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
    console.log(req.body);
    console.log(req.body.img);
    // var data = new FormData();
    // data.append('image', fs.createReadStream(`/Users/Steven/Documents/${req.body.img}`));

    // var config = {
    // method: 'post',
    // url: 'https://api.imgur.com/3/upload',
    // headers: { 
    //     'Authorization': 'Bearer 5eeae49394cd929e299785c8805bd168fc675280', 
    //     'Cookie': 'IMGURUIDJAFO=c9494373a1c1368cee4a91f3502045cf77a66d6cea0e4e33a58bae8833cdda18; _ga=GA1.2.365026426.1605316853; __auc=b64c2d2b175c4573b4fd3078f05; GLAM-AID=95f89dc066594f91a72dd10b4b46273a; _fbp=fb.1.1605316852684.1120280303; __qca=P0-1323567636-1605316852803; postpagebeta=1; G_ENABLED_IDPS=google; accesstoken=32c0eae72ef73db477d97b705c7b7bdf79abaeca; is_authed=1; postpagebetalogged=1; amplitude_id_f1fc2abcb6d136bd4ef338e7fc0b9d05imgur.com=eyJkZXZpY2VJZCI6ImNmODQ0Nzk1LTY2MjgtNDIyMy04NGNjLWNiNzFiYjJiZjEyOVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYwNTcyMzY0MzIzMSwibGFzdEV2ZW50VGltZSI6MTYwNTcyMzY0MzIzMywiZXZlbnRJZCI6NCwiaWRlbnRpZnlJZCI6MTcsInNlcXVlbmNlTnVtYmVyIjoyMX0=; SESSIONDATA=%7B%22sessionCount%22%3A4%2C%22sessionTime%22%3A1605723643256%7D; _gid=GA1.2.537284513.1605723643', 
    //     ...data.getHeaders()
    // },
    // data : data
    // };

    // axios(config)
    // .then(function (response) {
    // console.log(JSON.parse(response.data));
    // })
    // .catch(function (error) {
    // console.log(error);
    // });

    

    // User.findOneAndUpdate({ username : book }, { link : } )
}