import './avatar.scss';

export default function Avatar({ img }) {
  if (img) {
    return <div className="avatar avatar--img"></div>;
  } else {
    return <div className="avatar avatar--mercury"></div>;
  }
}
