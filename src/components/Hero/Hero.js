import './Hero.scss'
import hero from '../../data/videos.json';

const Hero = () => {
    return (
        <section className='hero'>
            <video poster={hero[0].image} controls className='hero__video'></video>
        </section>
    );
};

export default Hero;