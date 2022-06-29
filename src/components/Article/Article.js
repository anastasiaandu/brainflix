import './Article.scss';
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import articleDetails from '../../data/video-details.json';

const Article = () => {
    return (
        <section className='article'>
            <ArticleHeading />
            <ArticleDetails />
            <div className='article__video-description'>
                <p>
                    {articleDetails[0].description}
                </p>
            </div>
        </section>
    );
};

export default Article;