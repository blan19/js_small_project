import './App.scss';
import React, { useState } from 'react';
import Template from './components/ToDoList/Template';
import Insert from './components/ToDoList/Insert';
import List from './components/ToDoList/List';

const App = () => {
  return (
    <div className="App">
      <Template>
        <Insert/>
        <List />
      </Template>
    </div>
  );
};

export default App;