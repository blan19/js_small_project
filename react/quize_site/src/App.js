import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IntroPage from './pages/IntroPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizePage from './pages/QuizePage';
import ResultPage from './pages/ResultPage';

const QuizeTemplate = styled.div`
	width: 768px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const App = () => {
	const page = useSelector((state) => state.score.page);
	const quize = useSelector((state) => state.score.quize);
	const length = quize.length;

	return (
		<QuizeTemplate>
			{page === 0 && <IntroPage />}
			{page > 0 && <QuizePage page={page} quize={quize} />}
			{page > length && <ResultPage />}
		</QuizeTemplate>
	);
};

export default App;
