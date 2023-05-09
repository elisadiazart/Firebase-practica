import { StyledUl, StyledDiv } from './styles';

const Header = () => {
	return (
		<header>
			<nav>
				<StyledUl>
					<li>
						<a href='/'>Home</a>
					</li>
					<StyledDiv>
						<li>
							<a href='/log-in'>Log In</a>
						</li>
						<li>
							<a href='/sign-in'>Sign in</a>
						</li>
					</StyledDiv>
				</StyledUl>
			</nav>
		</header>
	);
};

export default Header;
