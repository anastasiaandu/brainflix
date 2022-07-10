import './UploadForm.scss';


const UploadForm = ({ 
    onChange, 
    titleValue, 
    descriptionValue, 
    onError
}) => {
    return (
        <form className='upload__form'>
            <label htmlFor="upload-title" className="upload__title-label">Title your video</label>
            <input 
                type="text" 
                placeholder="Add a title to your video" 
                id="upload-title" 
                className={!onError ? "upload__title" : "upload__title upload__title--error"}
                name="uploadTitle" 
                value={titleValue}
                onChange={onChange}
            />
            <label htmlFor="upload-description" className="upload__description-label">Add a video description</label>
            <textarea 
                type="text" 
                placeholder="Add a description to your video" 
                id="upload-description" 
                className={!onError ? "upload__description" : "upload__description upload__description--error"} 
                name="uploadDescription" 
                value={descriptionValue}
                onChange={onChange}
            />
        </form>
    );
};

export default UploadForm;