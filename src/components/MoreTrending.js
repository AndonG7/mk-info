import {React, useState, useEffect} from 'react'; 
import './moreTrending.css';
import WeatherCard from './WeatherCard';
 
function MoreTrending(props) {
  async function moreNews() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apiKey}`,
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

  console.log(newsData);
  
  const news = newsData ? [
    {title: newsData.articles[8].title, content: newsData.articles[8].content, source: newsData.articles[8].author, imageUrl: newsData.articles[8].urlToImage},
    {title: newsData.articles[4].title, content: newsData.articles[4].content, source: newsData.articles[4].author, imageUrl: newsData.articles[4].urlToImage},
    {title: newsData.articles[5].title, content: newsData.articles[5].content, source: newsData.articles[5].author, imageUrl: newsData.articles[5].urlToImage},
    {title: newsData.articles[6].title, content: newsData.articles[6].content, source: newsData.articles[6].author, imageUrl: newsData.articles[6].urlToImage},
    {title: newsData.articles[7].title, content: newsData.articles[7].content, source: newsData.articles[7].author, imageUrl: newsData.articles[7].urlToImage},
  ] : [];
  
  return (
    <div className="MoreTrending">
      {newsData ? (
        <>
          <h2 className='moreTrending-headline'>More news</h2>
          <div className="more-news-cards">
            {news.map((_news, index) => {
              return (
              <div className={`more-news-card news-card${index}`} key={index} style={{ order: index}} >
                <img className="more-news-image" src={_news.imageUrl} alt="news"></img>
                <div className="details">
                  <h2 className="more-news-title">{_news.title}</h2>
                  <p className="more-news-content">{_news.content}</p>
                  <p className="more-news-source">{_news.source}</p>
                </div>
              </div>
              );
            })}
            <WeatherCard className="news-card5" />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MoreTrending;
