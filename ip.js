const express = require('express');
const app = express();
const { MongoClient} = require('mongodb')
const url ='mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test'
const dbName = 'ip';
const collectionName = 'ips';
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  const client = new MongoClient(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ips= collection.insertOne({ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress})


});





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
