const express = require('express');
const { MongoClient} = require('mongodb')
const url ='mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test'
const dbName = 'ip';
const collectionName = 'ips';
const client = new MongoClient(url);


const app = express();



app.get('/ipss', async(req, res) => {
  try {
 
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.json(`Votre adresse IP publique est : ${ip}`);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }

});





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
