import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
	StyledForm,
	StyledContainer,
	StyledInputContainer,
	StyledInput,
	StyledButton
} from './styles';
import { auth } from '../../config/firebase.config';
import { useState } from 'react';

const FormSignIn = () => {
	const [registerData, setRegisterData] = useState({
		email: null,
		password: null
	});

	return (
		<StyledContainer>
			<StyledForm onSubmit={e => handleSubmit(e, registerData)}>
				<h3>SIGN IN</h3>
				<StyledInputContainer>
					<label>Email</label>
					<StyledInput
						type='text'
						onChange={e =>
							setRegisterData({ ...registerData, email: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label>Password</label>
					<StyledInput
						type='text'
						onChange={e =>
							setRegisterData({
								...registerData,
								password: e.target.value
							})
						}
					/>
				</StyledInputContainer>
				<StyledButton>Sign in</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
};

const handleSubmit = async (e, registerData) => {
	e.preventDefault();
	const { email, password } = registerData;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log(err);
	}
};

export default FormSignIn;
