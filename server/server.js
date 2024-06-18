

console.log('[+] running the NODE server\n');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodeyparser = require('body-parser');
const bodyParser = require('body-parser');

console.log('[=] imported the packages');

const port = 3456;
const mongoURI = 'mongodb://localhost:27017/testdb';

const app = express();


app.use(cors());
app.use(bodyParser.json());

console.log('[+] attempting to connect mongoDB');
mongoose.connect(mongoURI);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('[+] connected to MongoDB');
});


console.log("[+] started the server");
