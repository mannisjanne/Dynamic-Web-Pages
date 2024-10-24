import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const apiKey = 'REPLACE-YOUR-API'; // Replace with your API key

  const fetchNews = () => {
    if (!query) {
      alert('Please enter a keyword.');
      return;
    }

    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h1>News Search</h1>
      <p>Find the latest news from around the world</p>
      <p>
        <i>Type a keyword (e.g., "technology", "sports", "weather") and click "Search."</i>
      </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter keyword..."
      />
      <button onClick={fetchNews}>Search</button>

      <div id="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>{article.description || 'No description available'}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No articles found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
}

export default App;