import {React, useState, useEffect} from 'react';

async function newsFunction() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b389721bed374d918c0970b8cd034bdf`,
    {mode: 'cors'}
    );
  const newsData = await response.json();
  console.log(newsData);
  return newsData;
}
 
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await newsFunction();
      setData(result);
    }
    fetchData();
  }, []);

  console.log(data);
  
  return (
    <div className="App">
      <h1>{data.articles[0].title}</h1>
      <p>{data.articles[0].content}</p>
    </div>
  );
}

export default App;
