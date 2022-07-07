import './ArticleBody.scss';


const ArticleBody = ({ video }) => {
    return (
        <div className='article__video-description'>
            <p>
                {video.description}
            </p>
        </div>
    );
};

export default ArticleBody;
