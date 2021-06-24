import React from 'react';
import '../style/RankTemplate.scss';

const RankTemplate = ({ children}) => {
  return (
    <div className="RankTemplate">
      <div className="title">박스오피스 순위</div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default RankTemplate;