import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 400px;
	transform: translate(-50%, -50%);
	top: 40%;
	left: 50%;
	padding: 2rem;
	background-color: black;
	color: white;
	gap: 1rem;
`;

const StyledContainer = styled.main`
	width: 100%;
	height: calc(100vh - 4rem);
	position: relative;
`;

const StyledInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 4rem;
	align-items: center;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 0.3rem;
`;

const StyledButton = styled.button`
	background-color: yellow;
	border: none;
	padding: 0.5rem;
	text-transform: uppercase;
	border-radius: 6px;
	cursor: pointer;
	margin-top: 1rem;
	&:hover {
		background-color: white;
	}
`;

export {
	StyledForm,
	StyledContainer,
	StyledInputContainer,
	StyledInput,
	StyledButton
};
