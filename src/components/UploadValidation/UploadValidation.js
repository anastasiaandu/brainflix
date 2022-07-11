import './UploadValidation.scss';
import { Link } from 'react-router-dom';


const UploadValidation = ({ onError, onSuccess }) => {
    return (
        <div className='upload__validation'>
            <Link to='/' className='upload__redirect'><span className='upload__validation--success'>{onSuccess && `Upload successful! Go back to Home Page?`}</span></Link>
            <span className='upload__validation--error'>{onError && 'Please check that you have completed all fields'}</span>
        </div>
    );
};

export default UploadValidation;
