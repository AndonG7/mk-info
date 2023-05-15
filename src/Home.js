import {React, useState, useEffect} from 'react';
import Nav from './components/Nav';
import TopThree from './components/topThree';
import MoreTrending from './components/MoreTrending';
 
function Home(props) {
  const topData = props.topData;
  
  return (
    <div className="Home">
      {topData && (
        <>
          {/* <h1>{data.articles[0].title}</h1> */}
          <Nav topHeadlines={[topData.articles[0], topData.articles[1], topData.articles[2]]} />
          <TopThree ar1={topData.articles[0]} ar2={topData.articles[1]} ar3={topData.articles[2]} />
          <MoreTrending smallScreen={props.smallScreen} />
        </>
      )}
    </div>
  );
}

export default Home;




