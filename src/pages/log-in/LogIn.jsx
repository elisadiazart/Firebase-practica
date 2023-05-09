import { signInWithEmailAndPassword } from 'firebase/auth';
import {
	StyledForm,
	StyledContainer,
	StyledInputContainer,
	StyledInput,
	StyledButton
} from './styles';
import { auth } from '../../config/firebase.config';
import { useContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const FormLogIn = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		email: null,
		password: null
	});

	if (!currentUser) {
		return redirect('/');
	}

	return (
		<StyledContainer>
			<StyledForm onSubmit={e => handleSubmit(e, loginData)}>
				<h3>LOG IN</h3>
				<StyledInputContainer>
					<label>Email</label>
					<StyledInput
						type='text'
						onChange={e =>
							setLoginData({ ...loginData, email: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label>Password</label>
					<StyledInput
						type='text'
						onChange={e =>
							setLoginData({ ...loginData, password: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledButton>Log in</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
};

const handleSubmit = async (e, loginData) => {
	e.preventDefault();
	const { email, password } = loginData;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log('Invalid email');
	}
};

export default FormLogIn;
