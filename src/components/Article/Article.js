import './Article.scss';
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const Article = ({ videoDetail }) => {
    return (
        <section className='article'>
            <ArticleHeading videoDetail={videoDetail}/>
            <ArticleDetails videoDetail={videoDetail}/>
            <div className='article__video-description'>
                <p>
                    {videoDetail.description}
                </p>
            </div>
        </section>
    );
};

export default Article;