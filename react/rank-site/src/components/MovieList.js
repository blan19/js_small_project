import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/MovieList.scss';
import RankItem from './MovieItem';

function getPrevDay(){
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let prevDay = parseInt(day) - 1;
  return year + month + prevDay;
}

const RankList = () => {

  const [ loading, setLoading ] = useState(false);
  const [ movies, setMovies ] = useState(null);
  const today = getPrevDay();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = today || "20210621";
        const respones = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7e1c85fbc9a4a3aa90643a92c6622e0b&targetDt=${query}`);
        setMovies(respones.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [today]);

  if (loading) {
    return (
      <div>로딩 중..</div>
    );
  }

  if (!movies) {
    return null;
  }

  console.log(movies);

  return (
    <div className="RankList">
      {movies.map((movie, index) => (
        <RankItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default RankList;