import './Hero.scss'

const Hero = ({ video }) => {
    return (
        <section className='hero'>
            <video src={video.video} poster={video.image} controls className='hero__video'></video>
        </section>
    );
};

export default Hero;
