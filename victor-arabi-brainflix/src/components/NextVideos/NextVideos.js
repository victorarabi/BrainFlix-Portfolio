import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';
import './nextvideos.scss';

export default function NextVideos({ id, videos }) {
  let currentVideoId = id;
  return (
    <section className="next-videos">
      <h3 className="next-videos__title">NEXT VIDEOS</h3>
      {videos
        .filter((video) => video.id !== currentVideoId)
        .map((video) => (
          <Link
            className="next-videos__link"
            key={`video${video.id}`}
            to={`/video${video.id}`}>
            <VideoCard
              key={`vc${video.id}`}
              itemId={video.id}
              imgSrc={video.image}
              title={video.title}
              channel={video.channel}
            />
          </Link>
        ))}
    </section>
  );
}
