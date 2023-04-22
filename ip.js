const express = require('express');
const http = require('http');

const app = express();
const { MongoClient} = require('mongodb');
const cors = require('cors'); // Importer le module cors
app.use(cors())


const url ="mongodb+srv://ellidaanx:Mot2passe@ip.7wkf38t.mongodb.net/test";
const dbName = "ip";
const collectionName = "ips";
const client = new MongoClient(url);


app.get('/', (req, res) => {
    http.get('http://api.ipify.org', (resp) => {
      resp.on('data', async (ip) => {
        try {
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
          const result = await collection.insertOne({
            ip: ip.toString(),
            date: new Date().toISOString()
          });
          res.json(`Your public IP address is: ${ip}`);
        
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        } finally {
          await client.close();
        }
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      res.status(500).send("An error occurred while fetching the IP address.");
    });
  });





app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
