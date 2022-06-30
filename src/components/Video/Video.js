import './Video.scss';

const Video = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        props.onVideoChange(props.id);
    };

    return (
            <div onClick={clickHandler} key={props.id} className='videos__next'>
                <img src={props.image} alt={props.title} className='videos__thumbnail' />
                <div className='videos__info'>
                    <p className='videos__title'>
                        {props.title}
                    </p>
                    <p className='videos__channel'>
                        {props.channel}
                    </p>
                </div>
            </div>
            )
            
}

export default Video;