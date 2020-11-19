const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
// const request = require('request');
// const Gallery = require('../models/gallery');

// require('dotenv').config();

// const BASE_URL = `https://api.imgur.com/3/gallery/${Gallery.section}/${Gallery.sort}/${Gallery.page}?showViral=true&mature=false&album_previews=false`
// const BASE_URL = `https://api.imgur.com/3/gallery/hot/viral/1?showViral=true&mature=false&album_previews=false`

// console.log(Gallery.section);
// console.log(BASE_URL);

router.get('/', indexCtrl.index);
// router.post('/', function(req,res) {
//     const options = {
//         url : `${BASE_URL}`,
//         headers : {
//             'Authorization' : `${process.env.CLIENT_ID}`
//         }
//     }
//     request (
//         options,
//         function(err,response,body) {
//             console.log(body);
//             // const galleryData = JSON.parse(body);
//             // console.log(galleryData);
//         }
//     )
// })

module.exports = router;