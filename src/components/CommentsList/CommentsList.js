import uniqid from 'uniqid';
import './CommentsList.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';
import Comment from '../Comment/Comment';


const Comments = ({ videoDetail }) => {
    return (
        <section className='comments'>
            <p className='comments__total'>
                {videoDetail.comments.length} Comments
            </p>
            <div className='comments__section'>
                <img src={profilePicture} alt='user avatar' className='comments__avatar'/>
                <div className='comments__new'>
                    <p className='comments__heading'>
                        Join The Conversation
                    </p>
                    <form className='comments__form'>
                        <label htmlFor="user-comment" className="comments__label"></label>
                        <textarea type="text" placeholder="Add a new comment" id="user-comment" className="comments__input" name="comment" />
                        <span className="comments__validation"></span>
    
                        <button type="submit" className="comments__button">Comment</button>
                    </form>
                </div>
            </div>
            {
                videoDetail.comments.map((comment) => {
                    return <Comment key={uniqid()} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} image={'https://picsum.photos/200/300'} /> 
                })
            }
        </section>
    );
};

export default Comments;