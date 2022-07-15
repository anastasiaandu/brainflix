import './VideoInformation.scss';
import { formatDate } from '../../utils/dateUtils';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const VideoInformation = ({ video, onLike  }) => {

    const videoDate = formatDate(video.timestamp);

    const handleLike = (event) => {
        event.preventDefault();
        onLike();
    }

    return (
        <div className='article__video-details'>
            <div className='article__video-details--left'>
                <p className='article__video-channel'>
                    By {video.channel}
                </p>
                <p className='article__video-date'>
                    {videoDate}
                </p>
            </div>
            <div className='article__video-details--right'> 
                <div className='article__video-views'>
                    <img src={`${SERVER_URL}/images/views.svg`} alt='views icon' className='article__video-icon' />
                    <p className='article__views-text'>
                        {video.views}
                    </p>
                </div>
                <div className='article__video-likes'>
                    <img src={`${SERVER_URL}/images/likes.svg`} alt='likes icon' className='article__video-icon' />
                    <p className='article__likes-text'>
                        {video.likes}
                    </p>
                    <div>
                        <img src={`${SERVER_URL}/images/like-button.png`} alt='like button' className='article__like-button' onClick={handleLike} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoInformation;
