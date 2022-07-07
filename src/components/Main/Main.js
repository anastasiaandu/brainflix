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
                selectedVideo: null
            }

    changeActiveVideo = (id) => {
        axios
            .get(`${apiUrl}${id}${apiKey}`)
            .then((response) => {
                this.setState({
                    selectedVideo: response.data
                });
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    componentDidMount() {
        axios
            .get(`${apiUrl}${apiKey}`) 
            .then((response) => {
                this.setState({
                    videos: response.data
                })

                const videoId = this.props.match.params.id || this.state.videos[0].id;
                this.changeActiveVideo(videoId);
            })
            .catch((error) => {
                // console.log(error);
            });
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
