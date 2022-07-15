import uniqid from 'uniqid';
import './CommentsList.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';


const CommentsList = ({ videoComments, commentValue, onError, onChange, onClick, onDelete, onLike }) => {
    return (
        <section className='comments'>
            <p className='comments__total'>
                {videoComments.length} Comments
            </p>
            <CommentForm 
                commentValue={commentValue}
                onError={onError}
                onClick={onClick}
                onChange={onChange}
            />
            {
                videoComments.map((comment) => {
                    return <Comment 
                                key={uniqid()} 
                                name={comment.name} 
                                comment={comment.comment} 
                                likes={comment.likes}
                                timestamp={comment.timestamp} 
                                onDelete={onDelete}
                                onLike={onLike}
                            /> 
                })
            }
        </section>
    );
};

export default CommentsList;
