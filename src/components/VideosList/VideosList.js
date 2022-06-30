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