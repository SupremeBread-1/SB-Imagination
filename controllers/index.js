// const axios = require('axios');
// require('dotenv').config();

// module.exports = {
//     index
// }

// const BASE_URL = `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`;

// function index(req,res) {
//     console.log(`on and ready`);
//     // res.render('index', { galleryData : null });
//     const response = await axios.get(`${BASE_URL}`, {
//         headers : {
//             'Authorization' : `${process.env.CLIENT_ID}`
//         }
//     })
//     .then( function(respond) {
//         console.log(respond)
//     });
//     // res.render('index');

// }

// const options = {
//     headers : {'Authorization' : `${process.env.CLIENT_ID}`}
// }

// axios.get('https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false', options).then((response) => {
//     console.log(response);
// }, (error) => {
//     console.log(error);
// });

var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('client_id', 'edd587b5d205103');
data.append('client_secret', '03d43b5cc597e90569f9a10bc4567a6ba4cfdcbb');
data.append('grant_type', 'refresh_token');

var config = {
  method: 'get',
  url: 'https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false',
  headers: { 
    'Authorization': 'Bearer fd1e9462d3993427e38f0e879472865eca0de7e2', 
    'Cookie': 'IMGURUIDJAFO=c9494373a1c1368cee4a91f3502045cf77a66d6cea0e4e33a58bae8833cdda18; _ga=GA1.2.365026426.1605316853; __auc=b64c2d2b175c4573b4fd3078f05; GLAM-AID=95f89dc066594f91a72dd10b4b46273a; _fbp=fb.1.1605316852684.1120280303; __qca=P0-1323567636-1605316852803; postpagebeta=1; G_ENABLED_IDPS=google; accesstoken=32c0eae72ef73db477d97b705c7b7bdf79abaeca; is_authed=1; postpagebetalogged=1; retina=1; amplitude_id_f1fc2abcb6d136bd4ef338e7fc0b9d05imgur.com=eyJkZXZpY2VJZCI6ImNmODQ0Nzk1LTY2MjgtNDIyMy04NGNjLWNiNzFiYjJiZjEyOVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYwNTcyMzY0MzIzMSwibGFzdEV2ZW50VGltZSI6MTYwNTcyMzY0MzIzMywiZXZlbnRJZCI6NCwiaWRlbnRpZnlJZCI6MTcsInNlcXVlbmNlTnVtYmVyIjoyMX0=; SESSIONDATA=%7B%22sessionCount%22%3A4%2C%22sessionTime%22%3A1605723643256%7D; GLAM-SID=66850a3eb18f4eeab46d6cd40368acbf; _gid=GA1.2.537284513.1605723643; IMGURSESSION=862570fbde3e6085953a1f9ac9bea07c', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data));
//   console.log(JSON.parse(response.data));
console.log(response.data.data);
const galleryData = response.data.data;

})
.catch(function (error) {
  console.log(error);
});
