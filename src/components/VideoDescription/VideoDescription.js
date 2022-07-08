import './VideoDescription.scss';


const VideoDescription = ({ video }) => {
    return (
        <div className='article__video-description'>
            <p>
                {video.description}
            </p>
        </div>
    );
};

export default VideoDescription;
