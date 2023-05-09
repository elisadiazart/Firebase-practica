import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import FormSignIn from '../pages/Sign-in/FormSignIn';
import FormLogIn from '../pages/log-in/LogIn';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<h1>Home</h1>} />
				<Route path='sign-in' element={<FormSignIn />} />
				<Route path='log-in' element={<FormLogIn />} />
			</Route>
		</Routes>
	);
};

export default Router;
