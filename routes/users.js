const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

const authorization = require('../utils/authorization');

router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp);
router.get('/signin', usersCtrl.signIn);
router.get('/signout', usersCtrl.signOut);
router.post('/login', usersCtrl.login);
router.get('/imgupload', usersCtrl.imgUpload);
router.post('/imgupload', usersCtrl.uploading);

router.get('/profile', authorization.isAuthenticated, usersCtrl.profile);
// router.post('/profile', function(req,res) {

// })

module.exports = router;