import './CommentForm.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';


const CommentForm = () => {
    return (
        <div className='comments__section'>
            <img src={profilePicture} alt='user avatar' className='comments__avatar'/>
            <div className='comments__new'>
                <p className='comments__heading'>
                    Join The Conversation
                </p>
                <form className='comments__form'>
                    <label htmlFor="user-comment" className="comments__label"></label>
                    <input type="text" placeholder="Add a new comment" id="user-comment" className="comments__input" name="comment" />

                    <button type="submit" className="comments__button">Comment</button>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
