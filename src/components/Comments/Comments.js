import './Comments.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';


const Comments = ({ videoDetail }) => {
    return (
        <section className='comments'>
            {/* {
                videoDetails.map((video) => {
                    return <p key={video.id} className='comments__total'>{video.comments.length} Comments</p>
                })
            } */}
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
                        <input type="text" placeholder="Add a new comment" id="user-comment" className="comments__input" name="comment" />
                        <span className="comments__validation"></span>
    
                        <button type="submit" className="comments__button">Comment</button>
                    </form>
                </div>
            </div>
            <div className='comments__old'>
                
            </div>
        </section>
    );
};

export default Comments;