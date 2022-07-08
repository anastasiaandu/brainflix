import uniqid from 'uniqid';
import './CommentsList.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';


const CommentsList = ({ videoComments }) => {
    return (
        <section className='comments'>
            <p className='comments__total'>
                {videoComments.length} Comments
            </p>
            <CommentForm />
            {
                videoComments.map((comment) => {
                    return <Comment key={uniqid()} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} /> 
                })
            }
        </section>
    );
};

export default CommentsList;
