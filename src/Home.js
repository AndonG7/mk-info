import {React, useState, useEffect} from 'react';
import Nav from './components/Nav';
import TopThree from './components/topThree';

 async function newsFunction() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
    {mode: 'cors'}
    );
  
  const newsData = await response.json();
  return newsData;
}
 
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await newsFunction();
      setData(result);
    }
    fetchData();
  }, []);
  
  return (
    <div className="Home">
      {data && (
        <>
          {/* <h1>{data.articles[0].title}</h1> */}
          <Nav />
          <TopThree ar1={data.articles[0]} ar2={data.articles[1]} ar3={data.articles[2]} />
          <TopThree ar1={data.articles[3]} ar2={data.articles[4]} ar3={data.articles[5]} />
        </>
      )}
    </div>
  );
}

export default Home;




