import './Hero.scss'

const Hero = ({ video }) => {
    return (
        <section className='hero'>
            {/* {
                videos.map((video) => {
                    return <video key={video.id} poster={video.image} controls className='hero__video'></video>
                })
            } */}
            <video poster={video.image} controls className='hero__video'></video>
        </section>
    );
};

export default Hero;