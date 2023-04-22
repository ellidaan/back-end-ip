const express = require('express');
const app = express();



app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Votre adresse IP publique est : ${ip}`);
});





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
