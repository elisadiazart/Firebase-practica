import { useContext } from 'react';
import { StyledUl, StyledDiv } from './styles';
import { AuthContext } from '../../contexts/auth.context';

const Header = () => {
	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return (
			<header>
				<nav>
					<StyledUl>
						<li>
							<a href='/'>Home</a>
						</li>
						<StyledDiv>
							<li>
								<a href='/log-out'>Profile</a>
							</li>
							<li>
								<a href='/new-post'>Crear Post</a>
							</li>
						</StyledDiv>
					</StyledUl>
				</nav>
			</header>
		);
	}

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
