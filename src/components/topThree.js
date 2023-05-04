import {React} from 'react'; 
import './TopThree.css';
 
function TopThree(props) {
  
  return (
    <div className="topThree">
      <div className="n-one news-card" style={{ backgroundImage: `url(${props.ar1.urlToImage})`}}>
        <div className="text-one text">
            <h4>{props.ar1.author}</h4>
            <h2>{props.ar1.title}</h2>
        </div>
        <div className="desc-one desc">
            <h4>{props.ar1.author}</h4>
            <h2>{props.ar1.title}</h2>
            <p>{props.ar1.content}</p>
            <span><a href={props.ar1.url} target="_blank">Read More...</a></span>
        </div>
      </div>
      <div className="n-two-three">
        <div className="n-two news-card" style={{ backgroundImage: `url(${props.ar2.urlToImage})`}}>
            <div className="text-two text">
                <h4>{props.ar2.author}</h4>
                <h2>{props.ar2.title}</h2>
            </div>
            <div className="desc-two desc">
                <h4>{props.ar2.author}</h4>
                <h2>{props.ar2.title}</h2>
                <p>{props.ar2.content}</p>
                <span><a href={props.ar2.url} target="_blank">Read More...</a></span>
            </div>
        </div>
        <div className="n-three news-card" style={{ backgroundImage: `url(${props.ar3.urlToImage})`}}>
            <div className="text-three text">
                <h4>{props.ar3.author}</h4>
                <h2>{props.ar3.title}</h2>
            </div>
            <div className="desc-three desc">
                <h4>{props.ar3.author}</h4>
                <h2>{props.ar3.title}</h2>
                <p>{props.ar3.content}</p>
                <span><a href={props.ar3.url} target="_blank">Read More...</a></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopThree;




