import './VideoInformation.scss';
import { formatDate } from '../../utils/dateUtils';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';


const VideoInformation = ({ video }) => {

    const videoDate = formatDate(video.timestamp);

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
                    <img src={viewsIcon} alt='views icon' className='article__video-icon' />
                    <p className='article__views-text'>
                        {video.views}
                    </p>
                </div>
                <div className='article__video-likes'>
                    <img src={likesIcon} alt='likes icon' className='article__video-icon' />
                    <p className='article__likes-text'>
                        {video.likes}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoInformation;
