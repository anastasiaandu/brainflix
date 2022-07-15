import { Link } from 'react-router-dom';
import './UploadButton.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const UploadButton = () => {
    return (
        <>
            <Link to='/upload' className='upload__button'>
                <button className='upload__button-link'>
                    Upload
                </button>
            </Link>
            <img src={`${SERVER_URL}/images/Mohan-muruge.jpg`} alt='user avatar' className='upload__avatar'/>
        </>
    );
};

export default UploadButton;
