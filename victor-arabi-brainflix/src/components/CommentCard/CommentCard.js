import { convertTimeSimple } from '../../utils';
import Avatar from '../Avatar/Avatar';
import './commentcard.scss';

export default function CommentCard({ name, comment, timestamp }) {
  let timestampConv = convertTimeSimple(timestamp);
  return (
    <div className="card">
      <Avatar img={false} />
      <div className="card__container">
        <div className="card__label-container">
          <p className="card__name">{name}</p>
          <p className="card__timestamp">{timestampConv}</p>
        </div>
        <p className="card__comment">{comment}</p>
      </div>
    </div>
  );
}
