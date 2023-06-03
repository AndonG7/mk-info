import {React, useState, useEffect} from 'react'; 
import './moreTrending.css';
import WeatherCard from './WeatherCard';
 
function MoreTrending(props) {
  async function moreNews() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
      {mode: 'cors'}
    );
    
    const moreNewsData = await response.json();
    return moreNewsData;
  }
  
  const [newsData, setNewsData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const result = await moreNews();
      setNewsData(result);
    }
    fetchData();
  }, []);
  
  const news = newsData ? [
    {title: newsData.articles[4].title, content: newsData.articles[4].content, source: newsData.articles[4].author, imageUrl: newsData.articles[4].urlToImage, url: newsData.articles[4].url},
    {title: newsData.articles[5].title, content: newsData.articles[5].content, source: newsData.articles[5].author, imageUrl: newsData.articles[5].urlToImage, url: newsData.articles[5].url},
    {title: newsData.articles[6].title, content: newsData.articles[6].content, source: newsData.articles[6].author, imageUrl: newsData.articles[6].urlToImage, url: newsData.articles[6].url},
    {title: newsData.articles[7].title, content: newsData.articles[7].content, source: newsData.articles[7].author, imageUrl: newsData.articles[7].urlToImage, url: newsData.articles[7].url},
    {title: newsData.articles[8].title, content: newsData.articles[8].content, source: newsData.articles[8].author, imageUrl: newsData.articles[8].urlToImage, url: newsData.articles[8].url},
  ] : [];
  
  return (
    <div className="MoreTrending">
      {newsData ? (
        <>
          <h2 className='moreTrending-headline'>Trending Worldwide</h2>
          <div className="more-news-cards">
            {news.map((_news, index) => {
              return (
              <div className={`more-news-card news-card${index}`} key={index} style={{ order: index}} >
                <div className="more-news-card-content">
                  <div className="more-news-image" style={{backgroundImage: `url(${_news.imageUrl})`}} ></div>
                  <div className="more-news-details">
                    <p className="more-news-source">{_news.source}</p>
                    <h2 className="more-news-title">{_news.title}</h2>
                    <p className={props.smallScreen ? "more-news-content-false more-news-content" : "more-news-content"}>{_news.content.split('[')[0]} <a href={_news.url}>Read More</a></p>
                    <p className="click-for-more">Click for more</p>
                  </div>
                </div>
                <div className="more-news-card-desc">
                  <p>{_news.content.split('[')[0]}</p>
                  <span><a href={_news.url} target="_blank">Read More...</a></span>
                </div>
              </div>
              );
            })}
            <WeatherCard />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MoreTrending;
