import React from 'react';
import styled from 'styled-components';

const ButtonBlue = styled.a``;

const BlueButton = ({ text, clickEvent }) => {
	return <ButtonBlue onClick={clickEvent}>{text}</ButtonBlue>;
};

export default BlueButton;
