import {React, useState, useEffect} from 'react';
import './NewsList.css'

function NewsList(props) {
    const newsData = props.newsData;

    return (
        <div className="NewsList">
            {newsData && (
            <>
             {newsData.map((_news, index) => {
                return (
                    <div className={`news-cardd ${index}`} key={index} >
                        <h4 className='news-author'>{_news.author}</h4>
                        <h2 className='news-title'>{_news.title}</h2>
                        <h4 className='news-url'><a href={_news.url} target="_blank">Read more</a></h4>
                    </div>
                );
            })}
            </>
            )}
        </div>
  );
}

export default NewsList;
