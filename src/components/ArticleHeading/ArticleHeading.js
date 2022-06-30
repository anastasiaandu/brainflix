import './ArticleHeading.scss';

const ArticleHeading = ({ videoDetail }) => {
    return (
        <div className='article'>
            {/* {
                props.videoDetails.map((video) => {
                    return <h1 key={video.id} className='article__video-title'>{video.title}</h1>
                })
            } */}
            <h1 className='article__video-title'>
                {videoDetail.title}
            </h1>
        </div>
    );
};

export default ArticleHeading;