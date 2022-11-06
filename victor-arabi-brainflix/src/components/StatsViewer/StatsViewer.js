import './statsviewer.scss';

export default function StatsViewer({ iconSrc, statsValue }) {
  return (
    <div className="stats">
      <img className="stats__icon" src={iconSrc} alt="icon" />
      <p className="stats__val">{statsValue}</p>
    </div>
  );
}
