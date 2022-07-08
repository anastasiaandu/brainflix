import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/urlUtils';
import { apiKey } from '../../utils/urlUtils';
import './Main.scss';
import Hero from "../Hero/Hero";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";
import VideosList from "../VideosList/VideosList";


class Main extends Component {

    state = {
                videos: [],
                selectedVideo: null,
                isError: false
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
        const newProps = this.props.match.params.videoId;

        if (previousProps !== newProps) {
            const videoId = newProps;
            this.changeActiveVideo(videoId);
        }
    }

    render() {

        if(!this.state.selectedVideo) {
            return (
                <p>Loading...</p>
            );
        } 

        const unselectedVideos = this.state.videos.filter((video) => {
            return video.id !== this.state.selectedVideo.id
        })
        const selectedVideo = this.state.selectedVideo;
        
        return (
            <main>
                <Hero video={selectedVideo}/>
                <section className='body'>
                    <section className='body__left'>
                        <Article video={selectedVideo}/>
                        <CommentsList video={selectedVideo}/>
                    </section>
                    <section className='body__right'>
                        <VideosList videos={unselectedVideos} 
                                    // onVideoChange={this.changeActiveVideo} 
                        />
                    </section>
                </section>
            </main>
        );
    }
}

export default Main;
