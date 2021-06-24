import React from 'react';
import './App.scss';
import RankList from './components/MovieList';
import RankTemplate from './components/RankTemplate';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Rank Site</h1>
      </header>

      <ul>
        <li>
          <RankTemplate>
            <RankList/>
          </RankTemplate>
        </li>

        <li>
          <RankTemplate>
            <RankList/>
          </RankTemplate>
        </li>

        <li>
          <RankTemplate>
            <RankList/>
          </RankTemplate>
        </li>
      </ul>
    </div>
  );
};

export default App;