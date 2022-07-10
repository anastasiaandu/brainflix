import './UploadValidation.scss';


const UploadValidation = ({ onError, onSuccess }) => {
    return (
        <div className='upload__validation'>
            <span className='upload__validation--success'>{onSuccess && `Upload successful!`}</span>
            <span className='upload__validation--error'>{onError && 'Please check that you have completed all fields'}</span>
        </div>
    );
};

export default UploadValidation;
