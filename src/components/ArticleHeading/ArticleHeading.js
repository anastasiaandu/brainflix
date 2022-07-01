import './ArticleHeading.scss';

const ArticleHeading = ({ videoDetail }) => {
    return (
        <div className='article__heading'>
            <h1 className='article__video-title'>
                {videoDetail.title}
            </h1>
        </div>
    );
};

export default ArticleHeading;