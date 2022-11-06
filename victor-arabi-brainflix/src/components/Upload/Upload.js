import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import CancelButton from '../CancelButton/CancelButton';
import './upload.scss';

export default function Upload({ iconSrc, thumbnailSrc }) {
  //create states for title and description forms
  const [videoTitleForm, setVideoTitleForm] = useState('');
  const [videoDescriptionForm, setVideoDescriptionForm] = useState('');

  //defines document title based of page name
  useEffect(() => {
    document.title = 'BrainFlix - Upload new video';
  }, []);

  //function to send data to the api
  function sendNewVideo(title, description) {
    axios
      .post('http://localhost:8080/videos', {
        title: title,
        description: description,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //function to handle change of title form
  function handleTitleChange(event) {
    setVideoTitleForm(event.target.value);
  }

  //function to handle change of Description form
  function handleDescriptionChange(event) {
    setVideoDescriptionForm(event.target.value);
  }

  //function that handles submit
  function handleSubmit() {
    sendNewVideo(videoTitleForm, videoDescriptionForm);
  }

  return (
    <main className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <section className="upload__card">
        <div className="upload__thumbnail-container">
          <p className="upload__label">VIDEO THUMBNAIL</p>
          <div className="upload__container">
            <img
              className="upload__thumbnail"
              src={thumbnailSrc}
              alt="video thumbnail"
            />
          </div>
        </div>
        <div className="upload__form-container">
          <label htmlFor="videoTitle" className="upload__label">
            TITLE YOUR VIDEO
          </label>
          <textarea
            className="upload__input upload__input--title"
            name="videoTitle"
            id="videoTitle"
            rows="1"
            cols="1"
            required
            minLength="10"
            maxLength="32"
            placeholder="Add a title to your video"
            value={videoTitleForm}
            onChange={handleTitleChange}
          />
          <label htmlFor="videoDescription" className="upload__label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__input"
            name="videoDescription"
            id="videoDescription"
            rows="1"
            cols="1"
            required
            minLength="10"
            maxLength="320"
            placeholder="Add a description to your video"
            value={videoDescriptionForm}
            onChange={handleDescriptionChange}
          />
        </div>
      </section>
      <div className="upload__btn-container">
        <div className="upload__wrap">
          <Link onClick={handleSubmit} to="/">
            <Button iconSrc={iconSrc}>PUBLISH</Button>
          </Link>
        </div>
        <Link to="/">
          <CancelButton>CANCEL</CancelButton>
        </Link>
      </div>
    </main>
  );
}
