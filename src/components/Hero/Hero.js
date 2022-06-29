import './Hero.scss'

const Hero = (props) => {
    return (
        <section className='hero'>
            {/* {
                props.videos.map((video) => {
                    return <video key={video.id} poster={video.image} controls className='hero__video'></video>
                })
            } */}
            <video poster={props.videos[0].image} controls className='hero__video'></video>
        </section>
    );
};

export default Hero;