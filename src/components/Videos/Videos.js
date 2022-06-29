import './Videos.scss';

const Videos = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        props.onVideoChange(props.id);
    };

    return (
        <section className='videos'>
            <p className='videos__heading'>
                Next Videos
            </p>
            <ul className='videos__all'>
                {
                    props.videoDetails.map((video) => {
                        return (
                            <div  onClick={clickHandler} key={video.id} className='videos__next'>
                                <a><img src={video.image} alt={video.title} className='videos__thumbnail' /></a>
                                <div className='videos__info'>
                                    <p className='videos__title'>
                                        {video.title}
                                    </p>
                                    <p className='videos__channel'>
                                        {video.channel}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Videos;