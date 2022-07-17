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
                isAxiosError: false
            }

    //function to handle comment input change
    handleChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value,
            isError: false
        });
    };

    //function to check if comment input is valid
    isFormValid = () => {
        if (!this.state.newComment) {
            return false;
        }
        return true;
    };

    //function to post new comment
    handleCommentPost = (event) => {
        event.preventDefault();

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        if (!this.isFormValid()) {
            this.setState({
                isError: true
            });
            return;
        }
        
        axios 
            .post(`${SERVER_URL}/videos/${videoId}/comments`, {
                comment: this.state.newComment
            })
            .then(() => {
                this.updatePage();
            });

            this.setState({
                newComment: ''
            });
    }

    //function to delete comment
    handleCommentDelete = (timestamp) => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        axios 
            .delete(`${SERVER_URL}/videos/${videoId}/comments/:commentId`, {
                data: {timestamp: timestamp}
            })
            .then(() => {
                this.updatePage();
            })
    }

    //function to like comment
    handleCommentLike = (timestamp) => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        axios 
            .put(`${SERVER_URL}/videos/${videoId}/comments/:commentId/likes`, {
                timestamp: timestamp
            })
            .then(() => {
                this.updatePage();
            })
    }

    //function to like video
    handleVideoLike = () => {

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        axios 
            .put(`${SERVER_URL}/videos/${videoId}/likes`)
            .then(() => {
                this.updatePage();
            })
    }

    //function to redirect home from 404 page
    handleClick = () => {
        window.location = '/';
    }

    //function to update page
    updatePage = () => {
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
                    isAxiosError: true
                });
            });
    }

    //function to change selected video
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
                    isAxiosError: true
                });
            });
    }

    componentDidMount() {
        this.updatePage();
    }

    componentDidUpdate(prevProps) {
        let previousProps = prevProps.match.params.videoId || this.state.videos[0].id;
        let newProps = this.props.match.params.videoId || this.state.videos[0].id;

        if(!previousProps) { 
            return;
        }

        if (previousProps !== newProps) {
            const videoId = newProps;
            window.scrollTo(0, 0);
            this.changeActiveVideo(videoId);
        } 
    }

    render() {

        if(!this.state.selectedVideo && !this.state.isAxiosError) {
            return <p className='body__error'>Loading...</p>;
        }

        if(this.state.isAxiosError) {
            return (
                <div>
                    <p className='body__error'>404...</p>
                    <p className='body__error'>This page does not exist</p>
                    <button className='body__error--button' onClick={this.handleClick}>Go Back Home</button>
                </div>
            );
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
                            commentValue={this.state.newComment}
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
