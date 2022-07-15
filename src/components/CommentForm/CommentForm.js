import './CommentForm.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const CommentForm = ({ onError, commentValue, onChange, onClick }) => {
    return (
        <div className='comments__section'>
            <img src={`${SERVER_URL}/images/Mohan-muruge.jpg`} alt='user avatar' className='comments__avatar'/>
            <div className='comments__new'>
                <p className='comments__heading'>
                    Join The Conversation
                </p>
                <form className='comments__form'>
                    <label htmlFor="user-comment" className="comments__label"></label>
                    <input 
                        type="text" 
                        placeholder="Add a new comment" 
                        id="user-comment" 
                        className={!onError ? "comments__input" : "comments__input comments__input--error"}
                        name="newComment" 
                        value={commentValue}
                        onChange={onChange}
                    />
                    <button type="submit" className="comments__button" onClick={onClick}>Comment</button>
                </form>
                <div className='comments__validation'>
                    <span className='comments__validation--error'>{onError && 'Please check that you have entered your comment'}</span>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;
