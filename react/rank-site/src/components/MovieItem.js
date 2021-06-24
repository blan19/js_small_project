import React from 'react';
import '../style/MovieItem.scss';

const RankItem = ({ movie }) => {
  const { rank, rankOldAndNew, movieNm } = movie;
  return (
    <div className="RankItem">
      <div className="rank">
        {rank}위
      </div>

      <div className="OldAndNew">
        {rankOldAndNew === "OLD" ? '' : rankOldAndNew }
      </div>

      <p className="name">
        {movieNm}
      </p>
    </div>
  );
};

export default RankItem;