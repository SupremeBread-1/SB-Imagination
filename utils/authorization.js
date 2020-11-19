const User = require('../models/user');

module.exports = {
    addUserToRequest,
    isAuthenticated,
};

function addUserToRequest(req,res,next) {
    if(req.session && req.session.userId) {
        User.findById(req.session.userId, function(err, foundUser) {
            req.user = foundUser;
            next();
        });
    } else {
        next();
    }
}

function isAuthenticated(req,res,next) {
    if(req.user) return next();
    res.redirect('/users/signin');
}