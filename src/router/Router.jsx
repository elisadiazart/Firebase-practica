import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import FormSignIn from '../pages/Sign-in/FormSignIn';
import FormLogIn from '../pages/log-in/LogIn';
import Home from '../pages/home/Home';
import NewPost from '../pages/new-post/NewPost';
import LogOut from '../pages/log-out/LogOut';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='sign-in' element={<FormSignIn />} />
				<Route path='log-in' element={<FormLogIn />} />
				<Route path='new-post' element={<NewPost />} />
				<Route path='log-out' element={<LogOut />} />
			</Route>
		</Routes>
	);
};

export default Router;
