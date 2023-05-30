import {React, useState, useEffect} from 'react';
import './technologyNews.css'
 
function TechnologyNews(props) {
    const [news, setNews] = useState([
        {title: props.ar1.title, author: props.ar1.author, url: props.ar1.url},
        {title: props.ar2.title, author: props.ar2.author, url: props.ar2.url},
        {title: props.ar3.title, author: props.ar3.author, url: props.ar3.url},
    ]);

    return (
        <div className="technologyNews">
            <h2 className='technology-news-headline'>Technology</h2>
            {news.map((_news, index) => {
                return (
                    <div className={`technology-news-card technology-card${index}`} key={index} >
                        <h4 className='technology-author'>{_news.author}</h4>
                        <h2 className='technology-title'>{_news.title}</h2>
                        <h4 className='technology-url'><a href={_news.url} target="_blank">Read more</a></h4>
                    </div>
                );
            })}
            <h2 className='find-more'><a href='#'>Find More News</a></h2>
        </div>
  );
}

export default TechnologyNews;




