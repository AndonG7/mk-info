import {React, useState, useEffect} from 'react';
import Nav from './components/Nav';
import TopThree from './components/topThree';
 
function Home(props) {
  const topData = props.topData;
  
  return (
    <div className="Home">
      {topData && (
        <>
          {/* <h1>{data.articles[0].title}</h1> */}
          <Nav topHeadline={topData.articles[0]} />
          <TopThree ar1={topData.articles[0]} ar2={topData.articles[1]} ar3={topData.articles[2]} />
          <TopThree ar1={topData.articles[3]} ar2={topData.articles[4]} ar3={topData.articles[5]} />
        </>
      )}
    </div>
  );
}

export default Home;




