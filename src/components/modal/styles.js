import styled from 'styled-components';

const StyledModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
`;
const StyledMessageContainer = styled.div`
	background-color: white;
	border-radius: 6px;
	width: 500px;
	padding: 2rem 1rem;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
`;

const StyledCloseButton = styled.div`
	position: absolute;
	font-size: 1.5rem;
	background-color: gray;
	color: white;
	padding: 0.6rem 1.3rem 0.8rem 1.3rem;
	border-radius: 50%;
	top: -1.5rem;
	right: -1.5rem;
	cursor: pointer;
`;

export { StyledModalContainer, StyledMessageContainer, StyledCloseButton };
