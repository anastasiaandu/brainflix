import './Comment.scss';
import { formatDate } from '../../utils/dateUtils';

const Comment = ({ name, comment, timestamp }) => {

    const date = formatDate(timestamp);

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
            </div>
         </div>
    );
};

export default Comment;
