import './Hero.scss';

const Hero = ({ videoImage }) => {
    return (
        <section className='hero' data-state="hidden">
            <video poster={videoImage} controls className='hero__video'></video>
            <div className='hero__video-controls'>
                <button id="playpause" type="button" data-state="play">Play/Pause</button>
                <button id="stop" type="button" data-state="stop">Stop</button>
                <div class="progress">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                <button id="volinc" type="button" data-state="volup">Vol+</button>
                <button id="voldec" type="button" data-state="voldown">Vol-</button>
                <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </section>
    );
};

export default Hero;
