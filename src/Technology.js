import React from 'react';
import Nav from './components/Nav';
import Banner from './components/banner';
import NewsList from './components/NewsList';
import technologyImage from './images/technology.jpg';

function Technology(props) {
  const topData = props.topData;
  const news = props.technologyData && props.technologyData.articles;

  return (
    <div className="Technology">
      {topData && (
        <>
          <Nav active={"Technology"} topHeadlines={[topData.articles[0], topData.articles[1], topData.articles[2]]} />
        </>
      )}
      <Banner name="Technology" img={technologyImage} />
      {news ? (
        <NewsList newsData={news} />
      ) : (
        <div>No technology news available</div>
      )}
    </div>
  );
}

export default Technology;
