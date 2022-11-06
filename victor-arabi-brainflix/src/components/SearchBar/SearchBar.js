import './searchbar.scss';
import searchIcon from '../../assets/icons/search.svg';

export default function SearchBar() {
  return (
    //searchbar
    <div className="search-bar">
      <img className="search-bar__img" src={searchIcon} alt="icon" />
      <input className="search-bar__input" name="search" placeholder="Search" />
    </div>
  );
}
