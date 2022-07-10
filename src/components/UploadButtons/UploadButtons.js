import { Link } from 'react-router-dom';
import './UploadButtons.scss';


const UploadButtons = ({ onClick }) => {
    return (
        <div className="upload__buttons">
            <button type="submit" className="upload__publish" onClick={onClick} >Publish</button>
            <Link to='/' className="upload__cancel">Cancel</Link>
        </div>
    );
};

export default UploadButtons;
