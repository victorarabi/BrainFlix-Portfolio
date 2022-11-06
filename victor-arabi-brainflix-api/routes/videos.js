const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const videosRoute = express.Router();

//define videos and videosDetails Arrays
let videosDetails = [];
let videos = [];

//function to generate random timestamp
function videoDuration() {
  const minutes = Math.floor(Math.random() * 4);
  let seconds = Math.floor(Math.random() * 59);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
}
//function that update videos
function videosUpdater() {
  videos = [];
  videosDetails.forEach((video) => {
    let newInput = {
      id: '',
      title: '',
      channel: '',
      image: '',
    };
    newInput.id = video.id;
    newInput.title = video.title;
    newInput.channel = video.channel;
    newInput.image = video.image;
    videos.push(newInput);
  });
}

//middleware that fecths the data from the JSON file and updates videos and videosDetails for every request received
videosRoute.use((req, res, next) => {
  //reset data on the variables
  videosDetails = [];
  // reads the JSON file and update the videos array anytime a new request has been received
  videosDetails = JSON.parse(fs.readFileSync('./data/videos.json'));
  videosUpdater();
  next();
});

//GET requests for /videos
videosRoute.get('/', (req, res) => {
  res.send(videos);
});

//GET request for /videos/:id
videosRoute.get('/:id', (req, res) => {
  let videoId = req.params.id;
  let currentVideo = {
    title: '',
    channel: '',
    image: '',
    description: '',
    views: '',
    likes: '',
    duration: '',
    video: '',
    timestamp: 0,
    comments: '',
    id: '',
  };
  videosDetails
    .filter((video) => video.id === videoId)
    .map((video) => {
      currentVideo.title = video.title;
      currentVideo.channel = video.channel;
      currentVideo.image = video.image;
      currentVideo.description = video.description;
      currentVideo.views = video.views;
      currentVideo.likes = video.likes;
      currentVideo.duration = video.duration;
      currentVideo.video = video.video;
      currentVideo.timestamp = video.timestamp;
      currentVideo.comments = video.comments;
      currentVideo.id = video.id;
    });
  // checks if an actual video has been found, sends the currentVideo if succesful, sends 404 if not
  if (!currentVideo) {
    res.status(404).send('selected video does not exist');
  } else {
    res.send(currentVideo);
  }
});

//POST request
videosRoute.post('/', (req, res) => {
  let newVideoTitle = req.body.title;
  let newVideoDescription = req.body.description;
  //checks if request has correct parameters
  if (newVideoTitle && newVideoDescription) {
    //generate a randomly generate
    let newVideoId = uuidv4();
    //verifies that generated ID does not exist on current video list
    let idCheck = videosDetails.filter((video) => video.id === newVideoId);
    while (idCheck[0]) {
      newVideoId = uuidv4();
      idCheck = videosDetails.filter((video) => video.id === newVideoId);
    }
    //create newVideo object based of data received from POST request
    let newVideo = {
      title: newVideoTitle,
      channel: 'Unknown',
      image: 'http://localhost:8080/images/newvideo.jpeg',
      description: newVideoDescription,
      views: '0',
      likes: '0',
      duration: videoDuration(),
      video: 'http://localhost:8080/stream',
      timestamp: Date.now(),
      comments: [],
      id: newVideoId,
    };
    //pushes newVideo into videosDetails array
    videosDetails.push(newVideo);
    videosUpdater();
    let videosDetailsUpdated = JSON.stringify(videosDetails);
    //updates json file with stringfied version of videoDetails.
    fs.writeFileSync('./data/videos.json', videosDetailsUpdated);
    //returns 202 and the newVideo object
    res.status(202).send(newVideo);
  } else {
    //returns 400 if incorrect parameters are sent
    res.status(400).send('Something went wrong');
  }
});

//export videosRoute
module.exports = videosRoute;
