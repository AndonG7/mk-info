import {React, useState, useEffect} from 'react';
import Nav from './components/Nav';
import TopThree from './components/topThree';
import MoreTrending from './components/MoreTrending';
import SportNews from './components/sportNews'; 
import TechnologyNews from './components/technologyNews';
import BusinessNews from './components/businessNews';
import Footer from './components/footer';

function Home(props) {
  //Top news data
  const topData = props.topData;
  //Sport news data
  const sportData = props.sportData;
  //Technology news data
  const technologyData = props.technologyData;
  //Technology news data
  const businessData = props.businessData;

  return (
    <div className="Home">
      {topData && (
        <>
          {/* <h1>{data.articles[0].title}</h1> */}
          <Nav active={"Home"} topHeadlines={[topData.articles[0], topData.articles[1], topData.articles[2]]} />
          <TopThree ar1={topData.articles[0]} ar2={topData.articles[1]} ar3={topData.articles[2]} />
          <MoreTrending smallScreen={props.smallScreen} />
        {sportData && (
          <SportNews ar1={sportData.articles[0]} ar2={sportData.articles[1]} ar3={sportData.articles[2]} />
        )}
        {technologyData && (
          <TechnologyNews ar1={technologyData.articles[0]} ar2={technologyData.articles[1]} ar3={technologyData.articles[2]}/>
        )}
        {businessData && (
          <BusinessNews ar1={businessData.articles[0]} ar2={businessData.articles[1]} ar3={businessData.articles[2]}/>
        )}
        </>
      )}
    </div>
  );
}

export default Home;




