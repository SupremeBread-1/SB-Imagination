var https = require('follow-redirects').https;
var fs = require('fs');
require('dotenv').config();

var options = {
  'method': 'POST',
  'hostname': 'api.imgur.com',
  'path': '/oauth2/token',
  'headers': {
    'Authorization': `${process.env.AUTHORIZATION}`,
    'Cookie': `${process.env.COOKIE}`
  },
  'maxRedirects': 20
};
var sending;
var req = https.request(options, function (res) {
  var chunks = [];
  // sending = {};
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);

    sending = JSON.parse(body);

    // console.log(sending);
    // console.log(sending.access_token);
    // console.log(sending.refresh_token);
    var sss = sending.access_token
  });

  res.on("error", function (error) {
    console.error(error);
  });
  // console.log(res);
  // console.log(`working ${JSON.stringify(sending)}`);
});

var postData = `------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"refresh_token\"\r\n\r\n${process.env.REFRESH_TOKEN}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_id\"\r\n\r\n${process.env.CLIENT_ID}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_secret\"\r\n\r\n${process.env.CLIENT_SECRET}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"grant_type\"\r\n\r\nrefresh_token\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`;

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

// console.log(sending);
// console.log(`info: ${sending}`);
// console.log(`hot`);
// console.log(req.toString());

req.end();

// module.exports.log = function(sending) {
//   console.log(sending)
// };
// module.exports = {
//   req
// }