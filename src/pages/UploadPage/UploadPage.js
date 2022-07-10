import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UploadPage.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';

class UploadPage extends Component {
    state ={
        uploadTitle: '',
        uploadDescription: '',
        isError: false,
        isSuccess: false
    }

    handleChange = (event) => { 
        this.setState({
          [event.target.name]: event.target.value,
        });
    };

    isFormValid = () => {
        if (!this.state.uploadTitle || !this.state.uploadDescription) {
            return false;
        }
        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
    
        if (!this.isFormValid()) {
            this.setState({
                isError: true
            });
            return;
        }
        this.setState({
            isError: false,
            isSuccess: true
        });
    }

    render() {
        return (
            <main className='upload'>
                <h1 className='upload__heading'>
                    Upload Video
                </h1>  
                <div className='upload__container'>
                    <div className='upload__info'>
                        <p className='upload__thumbnail-label'>
                            Video Thumbnail
                        </p>
                        <img src={videoThumbnail} alt='thumbnail of video to upload' className='upload__thumbnail'/>
                    </div>
                    <form className='upload__form'>
                        <label htmlFor="upload-title" className="upload__title-label">Title your video</label>
                        <input 
                            type="text" 
                            placeholder="Add a title to your video" 
                            id="upload-title" 
                            className={!this.state.isError ? "upload__title" : "upload__title upload__title--error"}
                            name="uploadTitle" 
                            value={this.state.uploadTitle}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="upload-description" className="upload__description-label">Add a video description</label>
                        <textarea 
                            type="text" 
                            placeholder="Add a description to your video" 
                            id="upload-description" 
                            className={!this.state.isError ? "upload__description" : "upload__description upload__description--error"} 
                            name="uploadDescription" 
                            value={this.state.uploadDescription}
                            onChange={this.handleChange}
                        />

                        <span className='upload__validation-before'>{this.state.isSuccess && `Upload successful!`}</span>
                        <span className='upload__validation-before upload__validation-before--error'>{this.state.isError && 'Please check that you have completed all fields'}</span>

                    </form>
                </div>
                <div className="upload__buttons">
                    <button type="submit" className="upload__publish" onClick={this.handleSubmit} >Publish</button>
                    <Link to='/' className="upload__cancel">Cancel</Link>
                </div>

                <span className='upload__validation-after'>{this.state.isSuccess && `Upload successful!`}</span>
                <span className='upload__validation-after upload__validation-after--error'>{this.state.isError && 'Please check that you have completed all fields'}</span>
                
            </main>
        );
    }
}

export default UploadPage;
