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
                newCommentAuthor: "",
                newCommentContent: "",
            });
    }

    handleDelete = (event, id) => {

        event.preventDefault();

        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        axios 
            .delete(`${apiUrl}${videoId}/comments/${id}${apiKey}`)
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
