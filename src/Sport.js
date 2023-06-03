import React from 'react';
import Nav from './components/Nav';
import Banner from './components/banner';
import NewsList from './components/NewsList';
import sportImage from './images/sport.webp';

function Sport(props) {
  const topData = props.topData;
  const news = props.sportData && props.sportData.articles;

  return (
    <div className="Sport">
      {topData && (
        <>
          <Nav active={"Sport"} topHeadlines={[topData.articles[0], topData.articles[1], topData.articles[2]]} />
        </>
      )}
      <Banner name="Sport" img={sportImage} />
      {news ? (
        <NewsList newsData={news} />
      ) : (
        <div>No sport news available</div>
      )}
    </div>
  );
}

export default Sport;
