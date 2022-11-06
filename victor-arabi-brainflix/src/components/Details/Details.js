import StatsViewer from '../StatsViewer/StatsViewer';
import './details.scss';

export default function Details({
  channel,
  description,
  likes,
  likesIconSrc,
  timestamp,
  title,
  views,
  viewsIconSrc,
}) {
  return (
    <section className="details">
      <h1 className="details__title">{title}</h1>
      <div className="details__stats-container">
        <div className="details__container">
          <p className="details__channel">By {channel}</p>
          <p className="details__timestamp">{timestamp}</p>
        </div>
        <div className="details__container">
          <StatsViewer iconSrc={viewsIconSrc} statsValue={views} key="view" />
          <StatsViewer iconSrc={likesIconSrc} statsValue={likes} key="likes" />
        </div>
      </div>
      <p className="details__description">{description}</p>
    </section>
  );
}
