import React from 'react';
import '../../style/List.scss';
import Items from './Items';

const List = ({ todos, onRemove, onToggle }) => {
    const toDoList = todos.map(todo => (
        <Items todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
    ))

    return (
        <div className="List">
            {toDoList}
        </div>
    );
};

export default List;