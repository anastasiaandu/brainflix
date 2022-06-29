import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import article from './data/videos.json';
import articleDetails from './data/video-details.json';


// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       {/* <Footer /> */}
//     </>
//   );
// }


class App extends Component {
  state = {
    activeVideo: articleDetails[0],
    videos: article
  }

  changeActiveVideo = (id) => {
    this.setState({
      activeVideo: articleDetails.find((video) => {
        return video.id === id
      })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main videos={this.state.videos} onVideoChange={this.changeActiveVideo}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
