import {React, useState, useEffect} from 'react'; 
import './TopThree.css';
import { runPrompt } from '../translate'; 

function TopThree(props) {
  const [origText, setOrigText] = useState([
    {title: props.ar1.title, content: props.ar1.content.split('[')[0], author: props.ar1.author},
    {title: props.ar2.title, content: props.ar2.content.split('[')[0], author: props.ar2.author},
    {title: props.ar3.title, content: props.ar3.content.split('[')[0], author: props.ar3.author},
  ]);

  const [trText, setTrText] = useState([]);

  useEffect(() => {
    async function translateText() {
      const translatedText = await Promise.all(origText.map(async (text) => {
        const titleTranslation = await runPrompt(text.title);
        const contentTranslation = await runPrompt(text.content);
        return {
          title: titleTranslation,
          content: contentTranslation,
          author: text.author,
        };
      }));
      setTrText(translatedText);
    }

    translateText();
  }, []);
  
  return (
    <div className="topThree">
      {/* Displaying Content 
          If translation is present, show translation. If not, show original content.
      */}
      <div className="topThree-section">
        <div className="n-one news-card" style={{ backgroundImage: `url(${props.ar1.urlToImage})`}}>
          <div className="text-one text">
              <h4>{origText[0].author}</h4>
              {trText.length > 0 ? <h2>{trText[0].title}</h2> : <h2>{origText[0].title}</h2>}
          </div>
          <div className="desc-one desc">
              <h4>{origText[0].author}</h4>
              {trText.length > 0 ? <h2>{trText[0].title}</h2> : <h2>{origText[0].title}</h2>}
              {trText.length > 0 ? <p>{trText[0].content}</p> : <p>{origText[0].content}</p>}
              <span><a href={props.ar1.url} target="_blank">{trText.length > 0 ? "Прочитај повеќе..." : "Read more..."}</a></span>
          </div>
        </div>
        <div className="n-two-three">
          <div className="n-two news-card" style={{ backgroundImage: `url(${props.ar2.urlToImage})`}}>
              <div className="text-two text">
                  <h4>{origText[1].author}</h4>
                  {trText.length > 0 ? <h2>{trText[1].title}</h2> : <h2>{origText[1].title}</h2>}
              </div>
              <div className="desc-two desc">
                  <h4>{origText[1].author}</h4>
                  {trText.length > 0 ? <h2>{trText[1].title}</h2> : <h2>{origText[1].title}</h2>}
                  {trText.length > 0 ? <p>{trText[1].content}</p> : <p>{origText[1].content}</p>}
                  <span><a href={props.ar2.url} target="_blank">{trText.length > 0 ? "Прочитај повеќе..." : "Read more..."}</a></span>
              </div>
          </div>
          <div className="n-three news-card" style={{ backgroundImage: `url(${props.ar3.urlToImage})`}}>
              <div className="text-three text">
                  <h4>{origText[2].author}</h4>
                  {trText.length > 0 ? <h2>{trText[2].title}</h2> : <h2>{origText[2].title}</h2>}
              </div>
              <div className="desc-three desc">
                  <h4>{origText[2].author}</h4>
                  {trText.length > 0 ? <h2>{trText[2].title}</h2> : <h2>{origText[2].title}</h2>}
                  {trText.length > 0 ? <p>{trText[2].content}</p> : <p>{origText[2].content}</p>}
                  <span><a href={props.ar3.url} target="_blank">{trText.length > 0 ? "Прочитај повеќе..." : "Read more..."}</a></span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopThree;




