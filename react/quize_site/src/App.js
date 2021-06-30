import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IntroPage from './pages/IntroPage';

const QuizeTemplate = styled.div`
	background: #fafafa;
	width: 768px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const App = () => {
	const page = useSelector((state) => state.score.page);

	return <QuizeTemplate>{page === 0 && <IntroPage />}</QuizeTemplate>;
};

export default App;
