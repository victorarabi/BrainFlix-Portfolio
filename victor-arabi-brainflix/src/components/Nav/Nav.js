import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import './nav.scss';

export default function Nav({ iconSrc }) {
  //define variables for media query
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  //Check if mobile
  if (isMobile) {
    return (
      //render Nav if mobile
      <nav className="nav">
        <article className="nav__container">
          <SearchBar />
          <Avatar img={true} />
        </article>
        <Link to="/upload">
          <Button iconSrc={iconSrc}>UPLOAD</Button>
        </Link>
      </nav>
    );
  } else {
    return (
      //render nav if tablet/desktop
      <nav className="nav">
        <article className="nav__container">
          <SearchBar />
          <Link to="/upload">
            <Button iconSrc={iconSrc}>UPLOAD</Button>
          </Link>
        </article>
        <Avatar img={true} />
      </nav>
    );
  }
}
