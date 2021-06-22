import './App.scss';
import React, { useCallback, useRef, useState } from 'react';
import Template from './components/ToDoList/Template';
import Insert from './components/ToDoList/Insert';
import List from './components/ToDoList/List';

const App = () => {
  const [ todos, setTodos ] = useState([]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    text => {
      const buffer = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(buffer));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked } : todo, ),
      );
    },
    [todos],
  );



  return (
    <div className="App">
      <Template>
        <Insert onInsert={onInsert} />
        <List todos={ todos } onRemove={onRemove} onToggle={onToggle} />
      </Template>
    </div>
  );
};

export default App;