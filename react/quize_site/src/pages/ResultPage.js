import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, animated, config } from 'react-spring';
import { BlueButton } from '../components/BlueButton';
import { reset } from '../store/modules/score';

const ResultDiv = styled(animated.div)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin-top: 3rem;
		font-weight: bold;
	}
`;

const Score = styled(animated.div)`
	color: #0d6efd;
	font-weight: bold;
	font-size: xxx-large;
	margin-bottom: 2rem;
`;

const ResultText = styled(animated.div)`
	margin: 3rem 0;
	color: lightslategray;
	@media screen and (max-width: 400px) {
		h3 {
			font-size: medium;
		}
	}
`;

const ResultPage = () => {
	const score = useSelector((state) => state.score.score);
	const dispatch = useDispatch();
	const resultTextFade = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1200,
		config: config.molasses,
	});
	const { number } = useSpring({
		reset: false,
		from: { number: 0 },
		number: score,
		delay: 200,
		config: config.molasses,
	});

	const setReusltText = useCallback(() => {
		if (score < 15) {
			return <h3>이제 막 해축을 보기 시작한 새싹입니다</h3>;
		} else if (score < 25) {
			return <h3>아직은 선수 얼굴이 익숙하지 않는군요?</h3>;
		} else if (score < 50) {
			return <h3>이젠 얼굴을 보면 누군지는 짐작을 하기 시작합니다</h3>;
		} else if (score < 75) {
			return <h3>어디가서 꿀리지 않는 해축 지식이 있습니다</h3>;
		} else if (score < 90) {
			return <h3>고인물이 되어가고 있는 당신..!</h3>;
		} else {
			return <h3>당신이야말로 진정한 해축 고인물!</h3>;
		}
	}, [score]);

	return (
		<ResultDiv>
			<h1>결과는..?!</h1>
			<ResultText style={resultTextFade}>{setReusltText()}</ResultText>
			<Score>{number.to((n) => n.toFixed())}</Score>
			<BlueButton
				text="다시하기"
				clickEvent={() => dispatch(reset())}
			></BlueButton>
		</ResultDiv>
	);
};

export default ResultPage;
