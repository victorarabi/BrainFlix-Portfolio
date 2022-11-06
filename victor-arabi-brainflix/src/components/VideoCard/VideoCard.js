import './videocard.scss';

export default function VideoCard({ imgSrc, title, channel }) {
  return (
    <article className="video-card">
      <div className="video-card__container">
        <img className="video-card__poster" src={imgSrc} alt="video" />
      </div>
      <div className="video-card__wrap">
        <h2 className="video-card__title">{title}</h2>
        <p className="video-card__channel">{channel}</p>
      </div>
    </article>
  );
}
