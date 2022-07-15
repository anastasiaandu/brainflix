import React, { Component } from 'react';
import axios from 'axios';
import './UploadPage.scss';
import UploadThumbnail from '../../components/UploadThumbnail/UploadThumbnail';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadValidation from '../../components/UploadValidation/UploadValidation';
import UploadButtons from '../../components/UploadButtons/UploadButtons';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;


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

        axios
            .post(`${SERVER_URL}/videos`, {
                title: this.state.uploadTitle,
                description: this.state.uploadDescription
            }) 
            .then((response) => {
                console.log(response)
            })
            .catch(() => {
                this.setState({
                    isError: true
                });
            });

        this.setState({
            uploadTitle: '',
            uploadDescription: ''
        });

        setTimeout(() => {
            this.props.history.push('/');
        }, 2000)
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
