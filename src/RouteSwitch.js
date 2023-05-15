import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";


const RouteSwitch = () => {
  async function topHeadlines() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
      {mode: 'cors'}
      );
    
    const topHeadlinesData = await response.json();
    return topHeadlinesData;
  }
  
  const [topData, setTopData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const result = await topHeadlines();
        setTopData(result);
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
        <Route path="/" element={<Home topData={topData} smallScreen={smallScreen} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;