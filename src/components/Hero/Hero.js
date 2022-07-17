import './Hero.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Hero = ({ videoImage }) => {
    return (
        <section className='hero' data-state="hidden">
            <video poster={videoImage} className='hero__video'></video>
            <div className='hero__video-controls'>
                <div className='hero__video-play-pause'>
                    <img src={`${SERVER_URL}/images/Icon-play.svg`} alt='play button' className='hero__video-play'/>
                    {/* <img src={`${SERVER_URL}/images/Icon-pause.svg`} alt='pause button' className='hero__video-pause'/> */}
                </div>
                <div className='hero__video-scrubber-slide'>
                    <input type='range' step='0.1' value='10' className='hero__video-slide'/>
                    {/* <img src={`${SERVER_URL}/images/scrub.svg`} alt='scrubber thumb' className='hero__video-scrubber'/> */}
                </div>
                <div className='hero__video-fullscreen-volume'>
                    <img src={`${SERVER_URL}/images/fullscreen.svg`} alt='full screen' className='hero__video-fullscreen'/>
                    {/* <img src={`${SERVER_URL}/images/close_fullscreen.svg`} alt='close fullscreen' className='hero__video-close-fullscreen'/> */}
                    <img src={`${SERVER_URL}/images/Icon-volume.svg`} alt='volume' className='hero__video-volume'/>
                    {/* <img src={`${SERVER_URL}/images/volume_off.svg`} alt='volume off' className='hero__video-volume-off'/> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
