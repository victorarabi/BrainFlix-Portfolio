import './logo.scss';

export default function Logo({ logoImgSrc }) {
  return (
    <div>
      <img className="logo" src={logoImgSrc} alt="BrainFlix logo" />
    </div>
  );
}
