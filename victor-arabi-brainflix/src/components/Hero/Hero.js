import './hero.scss';

export default function Hero({ posterImgSrc }) {
  return (
    <article className="hero">
      <video className="hero__player" src="" controls poster={posterImgSrc} />
    </article>
  );
}
