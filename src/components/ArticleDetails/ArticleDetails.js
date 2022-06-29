import './ArticleDetails.scss';
import article from '../../data/videos.json';
import articleDetails from '../../data/video-details.json';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';

const ArticleDetails = () => {

    //declare function to format date to dynamic date
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
        { label: 'second', seconds: -10 }
    ];

    function formatDate(date) {
        const seconds = Math.floor((Date.now() - date) / 1000);
        const interval = intervals.find((interval) => {
            return interval.seconds < seconds;
        });
        const count = Math.floor(seconds / interval.seconds);
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }

    const videoDate = formatDate(articleDetails[0].timestamp);

    return (
        <div className='article__video-details'>
            <div className='article__video-details--left'>
                <p className='article__video-channel'>
                    By {article[0].channel}
                </p>
                <p className='article__video-date'>
                    {videoDate}
                </p>
            </div>
            <div className='article__video-details--right'> 
                <div className='article__video-views'>
                    <img src={viewsIcon} alt='views icon' className='article__video-icon' />
                    <p className='article__views-text'>
                        {articleDetails[0].views}
                    </p>
                </div>
                <div className='article__video-likes'>
                    <img src={likesIcon} alt='likes icon' className='article__video-icon' />
                    <p className='article__likes-text'>
                        {articleDetails[0].likes}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;