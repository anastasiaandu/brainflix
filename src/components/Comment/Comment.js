import './Comment.scss';

const Comment = ({ name, comment, timestamp }) => {


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

    const date = formatDate(timestamp);

    return (
        <div className='comments__old'>
            <img src='' alt='' className='comments__avatar-new'/>
            <div className='comments__container'>
                <div className='comments__info'>
                    <p className='comments__name'>
                        {name}
                    </p>
                    <p className='comments__date'>
                        {date}
                    </p>
                </div>
                <div className='comments__comment'>
                    {comment}
                </div>
            </div>
         </div>
    );
};

export default Comment;
