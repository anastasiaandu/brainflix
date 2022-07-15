import './Comment.scss';
import { formatDate } from '../../utils/dateUtils';

const Comment = ({ name, comment, likes, timestamp, onDelete, onLike }) => {

    const date = formatDate(timestamp);

    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(timestamp);
    }

    const handleLike = (event) => {
        event.preventDefault();
        onLike(timestamp);
    }

    return (
        <div className='comments__old'>
            <img src='' alt='' className='comments__avatar-new'/>
            <div className='comments__container'>
                <div className='comments__info'>
                    <p className='comments__name'>
                        {name}
                    </p>
                    <p className='comments__date'>
                        {date}
                    </p>
                </div>
                <div className='comments__comment'>
                    {comment}
                </div>
                <button 
                    type="submit" 
                    className="comments__like-button" 
                    onClick={handleLike}
                >
                    {`${likes} ${likes === 1 ? 'Like' : 'Likes'}`}
                </button>
                <button 
                    type="submit" 
                    className="comments__delete-button" 
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
         </div>
    );
};

export default Comment;
