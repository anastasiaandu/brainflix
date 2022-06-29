import './UploadButton.scss';
import profilePicture from '../../assets/images/Mohan-muruge.jpg';

const UploadButton = () => {
    return (
        <>
            <button className='upload'>
                Upload
            </button>
            <img src={profilePicture} alt='user avatar' className='upload__avatar'/>
        </>
    );
};

export default UploadButton;