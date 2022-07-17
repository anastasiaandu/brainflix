import './Hero.scss';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Hero = ({ videoImage }) => {
    return (
        <section className='hero' data-state="hidden">
            <video poster={videoImage} controls className='hero__video'></video>
            <div className='hero__video-controls'>
                {/* <button id="playpause" type="button" data-state="play">Play/Pause</button>
                <button id="stop" type="button" data-state="stop">Stop</button>
                <div class="progress">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                <button id="volinc" type="button" data-state="volup">Vol+</button>
                <button id="voldec" type="button" data-state="voldown">Vol-</button>
                <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button> */}
                <div className='hero__video-play-pause'>
                    <img src={`${SERVER_URL}/images/Icon-play.svg`} alt='play button' className='hero__video-play'/>
                    <img src={`${SERVER_URL}/images/Icon-pause.svg`} alt='pause button' className='hero__video-pause'/>
                </div>
                <div className='hero__video-scrubber-slide'>
                    <input type='range' step='0.1' value='10' className='hero__video-slide'/>
                    {/* <img src={`${SERVER_URL}/images/Icon-scrubber-control.svg`} alt='scrubber slide' className='hero__video-scrubber'/> */}
                </div>
                <div className='hero__video-fullscreen-volume'>
                    <img src={`${SERVER_URL}/images/fullscreen.svg`} alt='full screen' className='hero__video-fullscreen'/>
                    <img src={`${SERVER_URL}/images/close_fullscreen.svg`} alt='close fullscreen' className='hero__video-close-fullscreen'/>
                    <img src={`${SERVER_URL}/images/Icon-volume.svg`} alt='volume' className='hero__video-volume'/>
                    <img src={`${SERVER_URL}/images/volume_off.svg`} alt='volume off' className='hero__video-volume-off'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
