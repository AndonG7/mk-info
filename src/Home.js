import React from 'react';
import Nav from './components/Nav';
import TopThree from './components/topThree';
import MoreTrending from './components/MoreTrending';
import SportNews from './components/sportNews'; 
import TechnologyNews from './components/technologyNews';
import BusinessNews from './components/businessNews';
import Footer from './components/footer';

function Home(props) {
  const { topData, sportData, technologyData, businessData } = props;

  if (!topData || !topData.articles || topData.articles.length < 3) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      <Nav active="Home" topHeadlines={topData.articles.slice(0, 3)} />
      <TopThree ar1={topData.articles[0]} ar2={topData.articles[1]} ar3={topData.articles[2]} />
      <MoreTrending smallScreen={props.smallScreen} />
      
      {sportData && sportData.articles && sportData.articles.length >= 3 && (
        <SportNews ar1={sportData.articles[0]} ar2={sportData.articles[1]} ar3={sportData.articles[2]} />
      )}
      
      {technologyData && technologyData.articles && technologyData.articles.length >= 3 && (
        <TechnologyNews ar1={technologyData.articles[0]} ar2={technologyData.articles[1]} ar3={technologyData.articles[2]} />
      )}
      
      {businessData && businessData.articles && businessData.articles.length >= 3 && (
        <BusinessNews ar1={businessData.articles[0]} ar2={businessData.articles[1]} ar3={businessData.articles[2]} />
      )}
    </div>
  );
}

export default Home;
