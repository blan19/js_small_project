import React from 'react';
import '../../style/Template.scss';

const Template = ({ children }) => {
    return (
        <div className="Template">
            <div className="title">ToDoList</div>
            <div className="contents">{children}</div>
        </div>
    );
};

export default Template