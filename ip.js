const express = require('express');
const { MongoClient} = require('mongodb')
const url ='mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test'
const dbName = 'ip';
const collectionName = 'ips';



const app = express();



app.get('/', (req, res) => {
   const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const ips = collection.insertOne({ip: req.socket.remoteAddress});

  const ip = req.socket.remoteAddress;
  res.send(`Votre adresse IP publique est : ${ip}`);
});





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
