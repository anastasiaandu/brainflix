import React, { Component } from 'react';
import './UploadPage.scss';
import UploadThumbnail from '../../components/UploadThumbnail/UploadThumbnail';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadValidation from '../../components/UploadValidation/UploadValidation';
import UploadButtons from '../../components/UploadButtons/UploadButtons';


class UploadPage extends Component {
    state = {
        uploadTitle: '',
        uploadDescription: '',
        isError: false,
        isSuccess: false
    }

    handleChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value,
            isError: false
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

        window.location = '/';
    }

    render() {
        return (
            <main className='upload'>
                <h1 className='upload__heading'>
                    Upload Video
                </h1>  
                <div className='upload__container'>
                    <UploadThumbnail />
                    <UploadForm 
                        onChange={this.handleChange} 
                        titleValue={this.state.uploadTitle}
                        descriptionValue={this.state.uploadDescription}
                        onError={this.state.isError}
                    />
                </div>
                <UploadValidation 
                    onError={this.state.isError}
                    onSuccess={this.state.isSuccess}
                />
                <UploadButtons onClick={this.handleSubmit}/>
            </main>
        );
    }
}

export default UploadPage;
