import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './header.scss';

export default function Header({ logoImgSrc, uploadIconSrc }) {
  return (
    //header element for page element
    <header className="header">
      <Link to="/">
        <Logo logoImgSrc={logoImgSrc} />
      </Link>
      <Nav iconSrc={uploadIconSrc} />
    </header>
  );
}
