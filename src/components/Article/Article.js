import './Article.scss';
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const Article = (props) => {
    return (
        <section className='article'>
            <ArticleHeading videoDetails={props.videoDetails}/>
            <ArticleDetails videoDetails={props.videoDetails}/>
            <div className='article__video-description'>
                {/* {
                    props.videoDetails.map((video) => {
                        return <p key={video.id}>{video.description}</p>
                    })
                } */}
                <p>
                    {props.videoDetails[0].description}
                </p>
            </div>
        </section>
    );
};

export default Article;