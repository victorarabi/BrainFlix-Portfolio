import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { convertTimeSimple } from '../../utils';
import Details from '../Details/Details';
import Comments from '../Comments/Comments';
import NextVideos from '../NextVideos/NextVideos';
import Hero from '../Hero/Hero';
import './main.scss';

export default function Main({ likesIconSrc, newCommentSrc, viewsIconSrc }) {
  //define api endpoin
  const apiUrl = 'http://localhost:8080/videos';
  //define state and assign default value
  const [currentVideo, setCurrentVideo] = useState({
    channel: '',
    comments: [],
    description: '',
    id: '',
    image: '',
    likes: '',
    timestamp: '',
    title: '',
    views: '',
  });
  //state to save array of videos coming from api
  const [videos, setVideos] = useState([]);
  //get the default video/first on array
  async function setDefaultState(apiUrl) {
    axios
      .get(apiUrl)
      .then((response) => {
        const apiUrlVideo = '/' + response.data[0].id;
        setVideos(response.data);
        axios
          .get(apiUrl + apiUrlVideo)
          .then((response) => {
            setCurrentVideo({
              channel: response.data.channel,
              comments: response.data.comments,
              description: response.data.description,
              id: response.data.id,
              image: response.data.image,
              likes: response.data.likes,
              timestamp: convertTimeSimple(JSON.parse(response.data.timestamp)),
              title: response.data.title,
              views: response.data.views,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //get the video in regards to the id
  async function setCurrentState(urlID) {
    const apiVideoId = '/' + urlID;
    axios
      .get(apiUrl + apiVideoId)
      .then((response) => {
        document.title = 'BrainFlix - ' + response.data.title;
        setCurrentVideo({
          channel: response.data.channel,
          comments: response.data.comments,
          description: response.data.description,
          id: response.data.id,
          image: response.data.image,
          likes: response.data.likes,
          timestamp: convertTimeSimple(response.data.timestamp),
          title: response.data.title,
          views: response.data.views,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //save current dynamic patch to variable
  const urlID = useParams();
  //if component is called from BrainFlix home/first render, then it loads default state. If being called from next videos than it sets the state based of the video ID
  useEffect(() => {
    if (!urlID.id) {
      document.title = 'BrainFlix - HOME';
      setDefaultState(apiUrl);
    } else {
      setCurrentState(urlID.id);
    }
  }, [urlID.id]);
  return (
    <>
      <Hero posterImgSrc={currentVideo.image} />
      <main className="main">
        <div className="main__container">
          <Details
            channel={currentVideo.channel}
            description={currentVideo.description}
            likes={currentVideo.likes}
            likesIconSrc={likesIconSrc}
            timestamp={currentVideo.timestamp}
            title={currentVideo.title}
            views={currentVideo.views}
            viewsIconSrc={viewsIconSrc}
          />
          <Comments comments={currentVideo.comments} iconSrc={newCommentSrc} />
        </div>
        <NextVideos id={currentVideo.id} videos={videos} />
      </main>
    </>
  );
}
