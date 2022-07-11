import uniqid from 'uniqid';
import './CommentsList.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';


const CommentsList = ({ videoComments, commentValue, onError, onChange, onClick, onDelete }) => {
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
                                id={comment.id}
                                name={comment.name} 
                                comment={comment.comment} 
                                timestamp={comment.timestamp} 
                                onDelete={onDelete}
                            /> 
                })
            }
        </section>
    );
};

export default CommentsList;
