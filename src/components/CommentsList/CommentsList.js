import uniqid from 'uniqid';
import './CommentsList.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';


const CommentsList = ({ videoDetail }) => {
    return (
        <section className='comments'>
            <p className='comments__total'>
                {videoDetail.comments.length} Comments
            </p>
            <CommentForm />
            {
                videoDetail.comments.map((comment) => {
                    return <Comment key={uniqid()} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} /> 
                })
            }
        </section>
    );
};

export default CommentsList;