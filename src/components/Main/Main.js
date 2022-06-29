import Hero from "../Hero/Hero";
import Article from "../Article/Article";
import Comments from "../Comments/Comments";

const Main = (props) => {

    return (
        <main>
            <Hero />
            <Article />
            <Comments />
            <div>
                {props.videos.map((video, i) => {
                    return <img key={i} src={video.image}/>
                })}
            </div>
        </main>
    );
};

export default Main;