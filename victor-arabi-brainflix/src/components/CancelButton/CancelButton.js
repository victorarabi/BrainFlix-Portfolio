import './cancelbutton.scss';

export default function CancelButton({ children }) {
  return (
    <>
      <button className="cancel-button">
        <p className="cancel-button__txt">{children}</p>
      </button>
    </>
  );
}
