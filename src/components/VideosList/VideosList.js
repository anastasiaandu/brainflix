import './VideosList.scss';
import Video from '../Video/Video';


const VideosList = ({ videos }) => {
    return (
        <section className='videos'>
            <p className='videos__heading'>
                Next Videos
            </p>
            <ul className='videos__all'>
                {
                    videos.map((video) => {
                        return <Video 
                                    key={video.id}
                                    video={video}
                                    // onVideoChange={onVideoChange}
                                    // title={video.title}
                                    // channel={video.channel}
                                    // image={video.image}
                                    // id={video.id}
                                />
                    })
                }
            </ul>
        </section>
    );
};

export default VideosList;
