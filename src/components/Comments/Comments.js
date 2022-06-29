import './Comments.scss';
import articleDetails from '../../data/video-details.json';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';


const Comments = () => {
    return (
        <section className='comments'>
            <p className='comments__total'>
                {articleDetails[0].comments.length} Comments
            </p>
            <div className='comments__section'>
                <img src={profilePicture} alt='user avatar' className='comments__avatar'/>
                <div className='comments__new'>
                    <p className='comments__heading'>
                        Join The Conversation
                    </p>
                    <form className='comments__form'>
                        <label for="user-comment" class="comments__label"></label>
                        <input type="text" placeholder="Add a new comment" id="user-comment" class="comments__input" name="comment" />
                        <span class="comments__validation"></span>
    
                        <button type="submit" class="comments__button">Comment</button>
                    </form>
                </div>
            </div>
            <div className='comments__old'>

            </div>
        </section>
    );
};

export default Comments;