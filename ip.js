const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=131da5aae3fb47a2a8e5f64ac6c8c330&ip=${ip}`;

  request(url, { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }

    console.log(body);
    res.send(body);
  });
});



app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
