import React from 'react';
import styled from 'styled-components';

const IntroDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const IntroPage = () => {
	return (
		<IntroDiv>
			<img alt="메인이미지" src="./인트로.gif" />
			<h1>축구선수 이름 퀴즈!</h1>
			<h2>과연 다 맞출수 있을까..?!!</h2>
		</IntroDiv>
	);
};

export default IntroPage;
