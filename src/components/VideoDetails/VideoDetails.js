import './VideoDetails.scss';
import VideoHeading from "../VideoHeading/VideoHeading";
import VideoInformation from '../VideoInformation/VideoInformation';
import VideoDescription from '../VideoDescription/VideoDescription';


const VideoDetails = ({ video }) => {
    return (
        <section className='article'>
            <VideoHeading video={video} />
            <VideoInformation video={video} />
            <VideoDescription video={video} />
        </section>
    );
};

export default VideoDetails;