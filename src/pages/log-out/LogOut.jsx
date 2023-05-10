import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
	const navigate = useNavigate();
	return (
		<main>
			<div>
				<h3>Cerrar Sesion</h3>
				<button
					onClick={() => {
						handleLogout();
						navigate('/');
					}}
				>
					Cerrar
				</button>
			</div>
		</main>
	);
};

const handleLogout = async () => {
	await signOut(auth);
};

export default LogOut;
