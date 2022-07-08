import React, { Component } from 'react';
import './UploadPage.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';

class UploadPage extends Component {
    render() {
        return (
            <main className='upload'>
                <h1 className='upload__heading'>
                    Upload Video
                </h1>
                <p className='upload__thumbnail-heading'>
                    Video Thumbnail
                </p>
                <img src={videoThumbnail} alt='thumbnail of video to upload' className='upload__thumbnail'/>
                <form className='upload__form'>
                    <label htmlFor="upload-title" className="upload__title-label">Title your video</label>
                    <input type="text" placeholder="Add a title to your video" id="upload-title" className="upload__title" name="uploadTitle" />

                    <label htmlFor="upload-description" className="upload__description-label">Add a video description</label>
                    <input type="text" placeholder="Add a description to your video" id="upload-description" className="upload__description" name="uploadDescription" />

                    <button type="submit" className="upload__submit">Publish</button>
                    <button type="submit" className="upload__cancel">Cancel</button>
                </form>
            </main>
        );
    }
}

export default UploadPage;
