import './UploadThumbnail.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';


const UploadThumbnail = () => {
    return (
        <div className='upload__info'>
            <p className='upload__thumbnail-label'>
                Video Thumbnail
            </p>
            <img src={videoThumbnail} alt='thumbnail of video to upload' className='upload__thumbnail'/>
        </div>
    );
};

export default UploadThumbnail;