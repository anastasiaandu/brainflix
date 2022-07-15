import './UploadThumbnail.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const UploadThumbnail = () => {
    return (
        <div className='upload__info'>
            <p className='upload__thumbnail-label'>
                Video Thumbnail
            </p>
            <img src={`${SERVER_URL}/images/Upload-video-preview.jpg`} alt='thumbnail of video to upload' className='upload__thumbnail'/>
        </div>
    );
};

export default UploadThumbnail;