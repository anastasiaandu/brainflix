import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/urlUtils';
import { apiKey } from '../../utils/urlUtils';
import './HomePage.scss';
import Hero from "../Hero/Hero";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsList from "../CommentsList/CommentsList";
import VideosList from "../VideosList/VideosList";


class HomePage extends Component {

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
            const videoId = newProps || this.state.videos[0].id;
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
                <Hero videoImage={selectedVideo.image}/>
                <section className='body'>
                    <section className='body__main-video'>
                        <VideoDetails video={selectedVideo}/>
                        <CommentsList videoComments={selectedVideo.comments}/>
                    </section>
                    <section className='body__next-videos'>
                        <VideosList videos={unselectedVideos} 
                                    // onVideoChange={this.changeActiveVideo} 
                        />
                    </section>
                </section>
            </main>
        );
    }
}

export default HomePage;
