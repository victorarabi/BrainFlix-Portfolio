import './button.scss';

export default function Button({ iconSrc, children }) {
  return (
    <>
      <button className="button">
        <img className="button__icon" src={iconSrc} alt="icon" />
        <p className="button__txt">{children}</p>
      </button>
    </>
  );
}
