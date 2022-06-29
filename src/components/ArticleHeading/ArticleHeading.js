import './ArticleHeading.scss';

const ArticleHeading = (props) => {
    return (
        <div className='article'>
            {/* {
                props.videoDetails.map((video) => {
                    return <h1 key={video.id} className='article__video-title'>{video.title}</h1>
                })
            } */}
            <h1 className='article__video-title'>
                {props.videoDetails[0].title}
            </h1>
        </div>
    );
};

export default ArticleHeading;