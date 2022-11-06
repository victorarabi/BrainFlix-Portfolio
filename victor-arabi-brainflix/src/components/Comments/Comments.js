import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import CommentCard from '../CommentCard/CommentCard';
import './comments.scss';

export default function Comments({ comments, iconSrc }) {
  //render comment label based on the number of comments
  let commentsTotal = '';
  if (comments.length <= 1) {
    commentsTotal = comments.length + ' Comment';
  } else {
    commentsTotal = comments.length + ' Comments';
  }
  return (
    <section className="comments">
      <h2 className="comments__total">{commentsTotal}</h2>
      <article className="comments__add">
        <div className="comments__wrap">
          <p className="comments__label comments__label--placeholder">JOIN</p>
          <Avatar img={true} />
        </div>
        <div className="comments__container">
          <form className="comments__form">
            <label className="comments__label" htmlFor="newComment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__input"
              name="newComment"
              id="newComment"
              rows="1"
              cols="1"
              required
              minLength="10"
              maxLength="280"
              placeholder="Add a new comment"
            />
          </form>
          <Button iconSrc={iconSrc}>COMMENT</Button>
        </div>
      </article>
      <article className="comments__list">
        {comments.map((comment, i) => (
          <CommentCard
            key={comment.name + i}
            name={comment.name}
            comment={comment.comment}
            timestamp={comment.timestamp}
          />
        ))}
      </article>
    </section>
  );
}
