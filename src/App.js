function App() {
  async function loadNews() {
    //Calling API
    const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b389721bed374d918c0970b8cd034bdf');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
  }

  loadNews();

  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
