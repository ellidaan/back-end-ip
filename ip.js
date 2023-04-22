const express = require('express');
const { MongoClient} = require('mongodb')
const url ='mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test'
const dbName = 'ip';
const collectionName = 'ips';
const client = new MongoClient(url);


const app = express();




app.get('/', async(req, res) => {
  try { 
     const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
  
 
    const ip = req.socket.remoteAddress;
    const ips = collection.insertOne({ipss: ip});
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
