import React from 'react';
import styled from 'styled-components';
import { BlueButton } from '../components/BlueButton';
import { useDispatch } from 'react-redux';
import { next_page } from '../store/modules/score';

const IntroDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin-top: 3rem;
		font-weight: bold;
	}

	h3 {
		margin-bottom: 2rem;
	}

	img {
		border-radius: 1em;
		margin: 3rem 0;
	}

	@media screen and (max-width: 400px) {
		img {
			width: 300px;
			height: 300px;
		}
	}
`;

const IntroPage = () => {
	const dispatch = useDispatch();
	return (
		<IntroDiv>
			<h1>축구선수 이름 퀴즈!</h1>
			<img alt="메인이미지" src="/images/intro.gif" />
			<h3>과연 다 맞출수 있을까..?!!</h3>

			<BlueButton
				text="테스트 시작!"
				clickEvent={() => dispatch(next_page())}
			/>
		</IntroDiv>
	);
};

export default IntroPage;
