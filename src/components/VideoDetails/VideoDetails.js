import './VideoDetails.scss';
import VideoHeading from "../VideoHeading/VideoHeading";
import VideoInformation from '../VideoInformation/VideoInformation';
import VideoDescription from '../VideoDescription/VideoDescription';


const VideoDetails = ({ video, onLike }) => {

    return (
        <section className='article'>
            <VideoHeading video={video} />
            <VideoInformation video={video} onLike={onLike}/>
            <VideoDescription video={video} />
        </section>
    );
};

export default VideoDetails;