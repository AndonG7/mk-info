import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sport from './Sport';
import Technology from './Technology';
import Business from './Business';


const RouteSwitch = () => {
  //Getting top news from NewsAPI
  async function topHeadlines() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
      {mode: 'cors'}
      );
    
    const topHeadlinesData = await response.json();
    return topHeadlinesData;
  }

  //Getting Sport news from NewsAPI
  async function sportHeadlines() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${apiKey}`,
      {mode: 'cors'}
      );
    
    const sportHeadlinesData = await response.json();
    return sportHeadlinesData;
  }

  //Getting Technology news from NewsAPI
  async function technologyHeadlines() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`,
      {mode: 'cors'}
      );
    
    const technologyHeadlinesData = await response.json();
    return technologyHeadlinesData;
  }
  
  //Getting Business news from NewsAPI
  async function businessHeadlines() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}`,
      {mode: 'cors'}
      );
    
    const businessHeadlinesData = await response.json();
    return businessHeadlinesData;
  }

  const [topData, setTopData] = useState(null);
  const [sportData, setSportData] = useState(null);
  const [technologyData, setTechnologyData] = useState(null);
  const [businessData, setBusinessData] = useState(null);

  
    useEffect(() => {
      async function fetchData() {
        const result = await topHeadlines();
        const sportResult = await sportHeadlines();
        const technologyResult = await technologyHeadlines();
        const businessResult = await businessHeadlines();

        setTopData(result);
        setSportData(sportResult);
        setTechnologyData(technologyResult);
        setBusinessData(businessResult);

        console.log(businessResult);
      }
      fetchData();

      // Trigger mobile style
    // eslint-disable-next-line no-restricted-globals
    const screenWidth = screen.width;
    setSmallScreen(screenWidth <= 750);
    }, []);

  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home 
            topData={topData} 
            smallScreen={smallScreen} 
            sportData={sportData} 
            technologyData={technologyData} 
            businessData={businessData}
            />
          } />
          <Route path="sport" element= { <Sport topData={topData} sportData={sportData} /> }/>
          <Route path="technology" element= { <Technology topData={topData} technologyData={technologyData} /> }/>
          <Route path="business" element= { <Business topData={topData} businessData={businessData} /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;