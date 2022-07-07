import './Article.scss';
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleBody from '../ArticleBody/ArticleBody';


const Article = ({ video }) => {
    console.log(video)
    return (
        <section className='article'>
            <ArticleHeading video={video} />
            <ArticleDetails video={video} />
            <ArticleBody video={video} />
        </section>
    );
};

export default Article;