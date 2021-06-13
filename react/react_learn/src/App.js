import React, { useRef, useState } from 'react';
import Average from './components/Average';
import Counter from './components/Counter';
import Info from './components/Info';
import ScssComponent from './components/ScssComponent';
import UserList from './components/UserList';

const App = () => {

  const [ visible, setVisible ] = useState(false);

  return (
    <div>
      {/*}
      <Counter />
      <button onClick={() => {
        setVisible(!visible)
      }}>{visible ? '숨기기' : '보이기'}</button>

      {visible && <Info />}
    <UserList />
      *

    <Average />
      */}
      <ScssComponent />
    </div>
  );
};

export default App;