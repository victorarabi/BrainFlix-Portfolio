require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();

// import PORT number from .env file, if not present it will default to 8080
const { PORT } = process.env || 8080;

//import videos route
const videosRoutes = require('./routes/videos.js');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//Routes definition
app.use('/videos', videosRoutes);

//open server to listening
app.listen(PORT, () => {
  console.log('server is listening to port: ' + PORT);
});
