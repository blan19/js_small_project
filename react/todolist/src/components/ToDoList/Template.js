import React from 'react';
import '../../style/Template.scss';

const Template = ({ children }) => {
    return (
        <div className="Template">
            <div className="title">일정 관리</div>
            <div className="contents">{children}</div>
        </div>
    );
};

export default Template