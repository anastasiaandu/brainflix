import './Video.scss';
import { Link } from 'react-router-dom';


const Video = ({ video }) => {

    return (
        <Link to={`/${video.id}`} className='videos__next'>
            <img src={video.image} alt='/' className='videos__thumbnail' />
            <div className='videos__info'>
                <p className='videos__title'>
                    {video.title}
                </p>
                <p className='videos__channel'>
                    {video.channel}
                </p>
            </div>
        </Link>
    );   
}

export default Video;
