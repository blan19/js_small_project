import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ButtonBlue = styled(Button)`
	width: 175px;
	margin: 1rem 0;
	font-weight: bold;

	@media screen and (max-width: 400px) {
		font-size: medium;
	}
`;

export function BlueButton({ text, clickEvent }) {
	return (
		<>
			<ButtonBlue href="#" size="lg" onClick={clickEvent}>
				{text}
			</ButtonBlue>
		</>
	);
}
