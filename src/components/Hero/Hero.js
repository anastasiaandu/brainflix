import './Hero.scss';

const Hero = ({ videoImage }) => {
    return (
        <section className='hero'>
            <video poster={videoImage} controls className='hero__video'></video>
        </section>
    );
};

export default Hero;
