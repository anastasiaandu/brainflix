import './Hero.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Hero = ({ videoImage }) => {
    return (
        <section className='hero' data-state="hidden">
            <video poster={videoImage} className='hero__video'></video>
            <div className='hero__video-controls'>
                <div className='hero__video-play-pause'>
                    <img src={`${SERVER_URL}/images/Icon-play.svg`} alt='play button' className='hero__video-play'/>
                </div>
                <div className='hero__video-scrubber-slide'>
                    <input type='range' step='0.1' value='10' className='hero__video-slide'/>
                </div>
                <div className='hero__video-fullscreen-volume'>
                    <img src={`${SERVER_URL}/images/fullscreen.svg`} alt='full screen' className='hero__video-fullscreen'/>
                    <img src={`${SERVER_URL}/images/Icon-volume.svg`} alt='volume' className='hero__video-volume'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
