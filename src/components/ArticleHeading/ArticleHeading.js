import './ArticleHeading.scss';


const ArticleHeading = ({ video }) => {
    return (
        <div className='article__heading'>
            <h1 className='article__video-title'>
                {video.title}
            </h1>
        </div>
    );
};

export default ArticleHeading;