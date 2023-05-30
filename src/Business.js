import React from 'react';
import Nav from './components/Nav';
import Banner from './components/banner';
import NewsList from './components/NewsList';
import businessImage from './images/bussiness.jpg';

function Business(props) {
  const topData = props.topData;
  const news = props.businessData && props.businessData.articles;

  return (
    <div className="Business">
      {topData && (
        <>
          <Nav topHeadlines={[topData.articles[0], topData.articles[1], topData.articles[2]]} />
        </>
      )}
      <Banner name="Business" img={businessImage} />
      {news ? (
        <NewsList newsData={news} />
      ) : (
        <div>No business news available</div>
      )}
    </div>
  );
}

export default Business;
