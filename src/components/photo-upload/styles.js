import styled from 'styled-components';

const StyledForm = styled.form`
	padding: 2rem;
	border: 1px solid black;
	border-radius: 6px;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledImg = styled.img`
	height: 200px;
	max-width: 300px;
	object-fit: contain;
	margin: auto;
`;

const StyledButton = styled.button`
	margin: 1rem 0;
	padding: 0.5rem 2rem;
	background-color: yellow;
	border: 1px solid black;
	text-transform: uppercase;
`;

const StyledTitle = styled.h3`
	margin-bottom: 1rem;
`;

export { StyledForm, StyledImg, StyledButton, StyledTitle };
