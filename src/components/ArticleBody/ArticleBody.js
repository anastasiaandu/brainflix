import './ArticleBody.scss';

const ArticleBody = ({ videoDetail }) => {
    return (
        <div className='article__video-description'>
            <p>
                {videoDetail.description}
            </p>
        </div>
    );
};

export default ArticleBody;
