import "./slidingNews.css";

function SlidingNews(props) {
  
  
  return (
    <div className="news-container">
        <span className="breaking">BREAKING: </span>
        <ul>
            <li><a href={props.topHeadlines[0].url} target="blank">{props.topHeadlines[0].title}</a></li>
            <li><a href={props.topHeadlines[1].url} target="blank">{props.topHeadlines[1].title}</a></li>
            <li><a href={props.topHeadlines[2].url} target="blank">{props.topHeadlines[2].title}</a></li>
        </ul>
    </div>
  );
}

export default SlidingNews;

