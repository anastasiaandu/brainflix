import React, { Component } from 'react';
import axios from 'axios';
import './HomePage.scss';
import Hero from "../../components/Hero/Hero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideosList from "../../components/VideosList/VideosList";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class HomePage extends Component {

    state = {
                videos: [],
                selectedVideo: null,
                newComment: '',
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
        if (!this.state.newComment) {
            return false;
        }
        return true;
    };


    handleCommentPost = (event) => {
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
            // isSuccess: true
        });
        
        axios 
            .post(`${SERVER_URL}/videos/${videoId}/comments`, {
                comment: this.state.newComment
            })
            .then((response) => {
                console.log(response)
                return axios.get(`${SERVER_URL}/videos`)
            })
            .then((response) => {
                console.log(response)

                this.setState({
                    videos: response.data,
                    newComment: ''
                })

                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.changeActiveVideo(videoId);
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    isError: true
                });
            });

            this.setState({
                newComment: ''
            });
    }


    handleCommentDelete = () => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        console.log(videoId)

        // axios 
        //     .delete(`${SERVER_URL}/videos/${videoId}/comments/${commentId}`)
        //     .then((response) => {
        //         console.log('after delete: ', response)
        //     })
    }


    handleCommentLike = () => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        console.log(videoId)

        axios 
            .put(`${SERVER_URL}/videos/${videoId}/comments/:commentId/likes`)
            .then((response) => {
                console.log('after like: ', response)
            })
    }


    handleVideoLike = () => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        axios 
            .put(`${SERVER_URL}/videos/${videoId}/likes`)
            .then(() => {
                return axios.get(`${SERVER_URL}/videos`)
            })
            .then((response) => {
                console.log(response)

                this.setState({
                    videos: response.data
                })

                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.changeActiveVideo(videoId);
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    isError: true
                });
            });
    }


    changeActiveVideo = (id) => {
        axios
            .get(`${SERVER_URL}/videos/${id}`)
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
            .get(`${SERVER_URL}/videos`) 
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
                        <VideoDetails 
                            video={selectedVideo}
                            onLike={this.handleVideoLike}
                        />
                        <CommentsList 
                            videoComments={selectedVideo.comments}
                            commentValue={this.state.newCommentContent}
                            onError={this.state.isError}
                            onChange={this.handleChange}
                            onClick={this.handleCommentPost}
                            onDelete={this.handleCommentDelete}
                            onLike={this.handleCommentLike}
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
