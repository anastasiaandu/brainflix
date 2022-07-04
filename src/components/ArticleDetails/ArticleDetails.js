import './ArticleDetails.scss';
import { formatDate } from '../../utils/dateUtils';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';


const ArticleDetails = ({ videoDetail }) => {

    const videoDate = formatDate(videoDetail.timestamp);

    return (
        <div className='article__video-details'>
            <div className='article__video-details--left'>
                <p className='article__video-channel'>
                    By {videoDetail.channel}
                </p>
                <p className='article__video-date'>
                    {videoDate}
                </p>
            </div>
            <div className='article__video-details--right'> 
                <div className='article__video-views'>
                    <img src={viewsIcon} alt='views icon' className='article__video-icon' />
                    <p className='article__views-text'>
                        {videoDetail.views}
                    </p>
                </div>
                <div className='article__video-likes'>
                    <img src={likesIcon} alt='likes icon' className='article__video-icon' />
                    <p className='article__likes-text'>
                        {videoDetail.likes}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;
