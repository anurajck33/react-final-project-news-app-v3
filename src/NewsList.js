import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="news-list">
      <h2>Latest News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <Link to={`/article/${index}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
