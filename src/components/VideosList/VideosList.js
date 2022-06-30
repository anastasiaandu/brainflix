import './VideosList.scss';
import Video from '../Video/Video';

const VideosList = ({ videoDetails, onVideoChange }) => {
    return (
        <section className='videos'>
            <p className='videos__heading'>
                Next Videos
            </p>
            <ul className='videos__all'>
                {
                    videoDetails.map((video) => {
                        return <Video 
                                    key={video.id}
                                    title={video.title}
                                    channel={video.channel}
                                    image={video.image}
                                    description={video.description}
                                    views={video.views}
                                    likes={video.likes}
                                    duration={video.duration}
                                    video={video.video}
                                    timestamp={video.timestamp}
                                    comments={video.comments}
                                    id={video.id}
                                    onVideoChange={onVideoChange}
                                />
                    })
                }
            </ul>
        </section>
    );
};

export default VideosList;