import './ArticleHeading.scss';
import article from '../../data/videos.json';

const ArticleHeading = () => {
    return (
        <div className='article'>
            <h1 className='article__video-title'>
                {article[0].title}
            </h1>
        </div>
    );
};

export default ArticleHeading;