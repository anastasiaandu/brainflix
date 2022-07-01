import './Article.scss';
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleBody from '../ArticleBody/ArticleBody';

const Article = ({ videoDetail }) => {
    return (
        <section className='article'>
            <ArticleHeading videoDetail={videoDetail} />
            <ArticleDetails videoDetail={videoDetail} />
            <ArticleBody videoDetail={videoDetail} />
        </section>
    );
};

export default Article;