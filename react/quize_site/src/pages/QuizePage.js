import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BlueButton } from '../components/BlueButton';
import { next_page, check_correct } from '../store/modules/score';
import { useDispatch } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Quizediv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h4 {
		margin-top: 4rem;
		@media screen and (max-width: 400px) {
			font-size: medium;
		}
	}

	img {
		margin: 2.5rem 0;
	}
`;

const Progress = styled(ProgressBar)`
	width: 35em;

	margin-top: 2.5rem;

	@media screen and (max-width: 400px) {
		width: 250px;
	}
`;

const PlayerImage = styled.img``;
const QuizePage = ({ page, quize }) => {
	const dispatch = useDispatch();
	const now = page * 5;
	const setImage = useCallback((page) => {
		const src = `/images/${page}.png`;

		return src;
	}, []);

	const setQuize = useCallback(
		(idx) => {
			dispatch(check_correct(page - 1, idx));
			dispatch(next_page());
		},
		[dispatch, page],
	);

	return (
		<>
			{page < 21 && (
				<Quizediv>
					<h4>{quize[page - 1].q}</h4>
					<PlayerImage alt="축구선수" src={setImage(page)} />
					<BlueButton
						text={quize[page - 1].a[0].player}
						clickEvent={() => setQuize(0)}
					/>
					<BlueButton
						text={quize[page - 1].a[1].player}
						clickEvent={() => setQuize(1)}
					/>
					<BlueButton
						text={quize[page - 1].a[2].player}
						clickEvent={() => setQuize(2)}
					/>
					<Progress now={now} animated label={`${page}/20`} />
				</Quizediv>
			)}
		</>
	);
};

export default QuizePage;
