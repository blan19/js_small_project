import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Header from './components/Header';
import Category from './components/Category';

const App = () => {
  const [ category, setCategory ] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div className="App">
      <Header />
      <Category onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </div>
  );
};

export default App;