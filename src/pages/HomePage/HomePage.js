import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUtils';
import { apiKey } from '../../utils/apiUtils';
import './HomePage.scss';
import Hero from "../../components/Hero/Hero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideosList from "../../components/VideosList/VideosList";


class HomePage extends Component {

    state = {
                videos: [],
                selectedVideo: null,
                newCommentAuthor: 'Anastasia',
                newCommentContent: '',
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
        if (!this.state.newCommentAuthor || !this.state.newCommentContent) {
            return false;
        }
        return true;
    };

    // title: this.state.videoTitle,
    // channel: 'Scene One',
    // image: 'http://localhost:8080/images/Upload-video-preview.jpg',
    // description: this.state.videoDescription,
    // views: '12,400,600',
    // likes: '24,000',
    // duration: '5:03',
    // video:'https://project-2-api.herokuapp.com/stream',
    // timestamp: Date.now(),
    // comments: []


    handlePost = (event) => {
        event.preventDefault();

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

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
            .post(`${apiUrl}${videoId}/comments${apiKey}`, {
                name: this.state.newCommentAuthor,
                comment: this.state.newCommentContent
            })
            .then(() => {
                return axios.get(`${apiUrl}${apiKey}`)
            })
            .then((response) => {
                console.log(response)

                this.setState({
                    videos: response.data
                })

                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.changeActiveVideo(videoId);
            })
            .catch(() => {
                this.setState({
                    isError: true
                });
            });

            this.setState({
                newCommentContent: ""
            });
    }

    handleDelete = (id) => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;
        const commentId = id;

        console.log(videoId)
        console.log(id)

        // `${apiUrl}${videoId}/comments/${commentId}/${apiKey}`

        axios 
            .delete(`https://project-2-api.herokuapp.com/videos/${videoId}/comments/${commentId}/?api_key=8bb46c1b-b8e2-4667-b86e-2c79c96560d8`)
            .then((response) => {
                console.log('after delete: ', response)
            })
    }

    changeActiveVideo = (id) => {
        axios
            .get(`${apiUrl}${id}${apiKey}`)
            .then((response) => {
                this.setState({
                    selectedVideo: response.data
                });
            })
            .catch(() => {
                this.setState({
                    isError: true
                });
            });
    }

    componentDidMount() {
        axios
            .get(`${apiUrl}${apiKey}`) 
            .then((response) => {
                this.setState({
                    videos: response.data
                })

                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.changeActiveVideo(videoId);
            })
            .catch(() => {
                this.setState({
                    isError: true
                });
            });
    }

    componentDidUpdate(prevProps) {

        const previousProps = prevProps.match.params.videoId;
        const newProps = this.props.match.params.videoId || this.state.videos[0].id;

        if (previousProps !== newProps) {
            const videoId = newProps;
            this.changeActiveVideo(videoId);
        }
    }

    render() {

        if(!this.state.selectedVideo) {
            return <p className='body__error'>Loading...</p>;
        } 

        if(!this.state.selectedVideo && !this.state.isError) {
            return <p className='body__error'>There's a problem with the network. Please try again later...</p>;
        }

        const unselectedVideos = this.state.videos.filter((video) => {
            return video.id !== this.state.selectedVideo.id
        })
        const selectedVideo = this.state.selectedVideo;
        
        return (
            <main>
                <Hero videoImage={selectedVideo.image}/>
                <section className='body'>
                    <section className='body__main-video'>
                        <VideoDetails video={selectedVideo}/>
                        <CommentsList 
                            videoComments={selectedVideo.comments}
                            commentValue={this.state.newCommentContent}
                            onError={this.state.isError}
                            onChange={this.handleChange}
                            onClick={this.handlePost}
                            onDelete={this.handleDelete}
                        />
                    </section>
                    <section className='body__next-videos'>
                        <VideosList videos={unselectedVideos}/>
                    </section>
                </section>
            </main>
        );
    }
}

export default HomePage;
