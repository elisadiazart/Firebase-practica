import styled from 'styled-components';

const StyledPostCard = styled.div`
	padding: 1rem;
	border: 1px solid black;
	border-radius: 6px;
`;

const StyledPosts = styled.div`
	padding: 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(3, minmax(200px, 1fr));
	margin-top: 2rem;
`;

export { StyledPostCard, StyledPosts };
