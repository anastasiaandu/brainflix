import './Comment.scss';
import { formatDate } from '../../utils/dateUtils';

const Comment = ({ id, name, comment, timestamp, onDelete }) => {

    const date = formatDate(timestamp);

    const handleClick = (id) => {
        onDelete(id);
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
                    className="comments__delete-button" 
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
         </div>
    );
};

export default Comment;
