const express = require('express');
const app = express();
const { MongoClient} = require('mongodb')
const url ='mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test'
const dbName = 'ip';
const collectionName = 'ips';
const cors = require('cors');
app.use(cors());

app.get('/', async (req, res) => {
  const client = new MongoClient(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;
  
  const existingIp = await collection.findOne({ ip: ip }); // Vérifie si l'adresse IP est déjà présente dans la collection
  if (existingIp) {
    console.log(`IP ${ip} already exists in the collection`);
    res.send(ip);
    console.log(ip);
  } else {
    const newIp = await collection.insertOne({ ip: ip });
    console.log(`Inserted new IP ${ip} into the collection`);
  }
  client.close();
    
});





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
