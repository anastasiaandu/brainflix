import './Video.scss';


const Video = ({ 
    title, 
    channel, 
    image, 
    id, 
    onVideoChange 
}) => {

    const clickHandler = (event) => {
        event.preventDefault();
        onVideoChange(id);
    };

    return (
            <div onClick={clickHandler} key={id} className='videos__next'>
                <img src={image} alt={title} className='videos__thumbnail' />
                <div className='videos__info'>
                    <p className='videos__title'>
                        {title}
                    </p>
                    <p className='videos__channel'>
                        {channel}
                    </p>
                </div>
            </div>
            )
            
}

export default Video;