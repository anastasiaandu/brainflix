import { Link } from 'react-router-dom';
import './UploadButton.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';

const UploadButton = () => {
    return (
        <>
            <Link to='/upload' className='upload__button'>
                <button className='upload__button-link'>
                    Upload
                </button>
            </Link>
            <img src={profilePicture} alt='user avatar' className='upload__avatar'/>
        </>
    );
};

export default UploadButton;