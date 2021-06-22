import React, { useState, useEffect } from 'react';
import '../style/NewsList.scss';
import axios from 'axios';
import NewsItems from './NewsItems';

const NewsList = ({ category }) => {
  const [ articles, setArticles ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7c7b6cb4dd984f59b51f82582fb85139`);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (<div className="loading">로딩 중..</div>);
  }

  if (!articles) {
    return null;
  }

  const arrList = articles.map(article => (
    <NewsItems key={article.url} article={article} />
  ));

  return (
    <div className="NewsList">
      {arrList}
    </div>
  );
};

export default NewsList;