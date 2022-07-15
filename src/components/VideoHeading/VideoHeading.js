import './VideoHeading.scss';


const VideoHeading = ({ video }) => {

    return (
        <div className='article__heading'>
            <h1 className='article__video-title'>
                {video.title}
            </h1>
        </div>
    );
};

export default VideoHeading;