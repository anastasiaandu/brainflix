import React, { Component } from 'react';
import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import './Main.scss';
import Hero from "../Hero/Hero";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";
import VideosList from "../VideosList/VideosList";


class Main extends Component {

    state = {
              activeVideo: videoDetails[0],
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
        const unselectedVideos = this.state.videos.filter((video) => {
            return video.id !== this.state.activeVideo.id
        })
        const selectedVideo = this.state.activeVideo;

        return (
            <main>
                <Hero video={selectedVideo}/>
                <section className='body'>
                    <section className='body__left'>
                        <Article videoDetail={selectedVideo}/>
                        <CommentsList videoDetail={selectedVideo}/>
                    </section>
                    <section className='body__right'>
                        <VideosList videoDetails={unselectedVideos} 
                                    onVideoChange={this.changeActiveVideo}
                        />
                    </section>
                </section>
            </main>
        );
    }
}

export default Main;
