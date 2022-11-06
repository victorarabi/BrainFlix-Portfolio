import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';
import logoImgSrc from './assets/logo/BrainFlix-logo.svg';
import uploadIconSrc from './assets/icons/upload.svg';
import likesIconSrc from './assets/icons/likes.svg';
import viewsIconSrc from './assets/icons/views.svg';
import newCommentSrc from './assets/icons/add_comment.svg';
import uploadImageSrc from './assets/images/Upload-video-preview.jpg';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Header logoImgSrc={logoImgSrc} uploadIconSrc={uploadIconSrc} />
      <Switch>
        <Route path="/video:id">
          <Main
            likesIconSrc={likesIconSrc}
            newCommentSrc={newCommentSrc}
            viewsIconSrc={viewsIconSrc}
          />
        </Route>
        <Route exact path="/">
          <Main
            likesIconSrc={likesIconSrc}
            newCommentSrc={newCommentSrc}
            viewsIconSrc={viewsIconSrc}
          />
        </Route>
        <Route exact path="/upload">
          <Upload iconSrc={uploadIconSrc} thumbnailSrc={uploadImageSrc} />
        </Route>
      </Switch>
    </Router>
  );
}
