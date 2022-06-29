import React, { Component } from 'react';
import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import Hero from "../Hero/Hero";
import Article from "../Article/Article";
import Comments from "../Comments/Comments";
import Videos from "../Videos/Videos";


class Main extends Component {

    state = {
              activeVideo: null,
              videos: videos,
              videoDetails: videoDetails
            }
          
    changeActiveVideo = (id) => {
        this.setState({
            activeVideo: videoDetails.find((video) => {
                return video.id === id
            })
        });
    }

    render() {
        // const filteredVideos = this.state.videos.filter((video) => {
        //     return video.id === this.state.activeVideo.id
        // })
        return (
            <main>
                <Hero videos={this.state.videos}/>
                <Article videoDetails={this.state.videoDetails}/>
                <Comments videoDetails={this.state.videoDetails}/>
                <Videos videoDetails={this.state.videoDetails} 
                        onVideoChange={this.changeActiveVideo}
                />
            </main>
        );
    }
}

export default Main;
