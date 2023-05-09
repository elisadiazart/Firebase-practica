import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/auth.context';
import { onSnapshot } from 'firebase/firestore';

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	const [posts, setPosts] = useState();

	useEffect(() => {
		watchPostsChanges(setPosts);

		return () => watchPostsChanges();
	}, []);

	return (
		<main>
			<h1>home</h1>
		</main>
	);
};

const watchPostsChanges = setPosts => {
	onSnapshot(blogCollectionReference, snapshot => {
		const allPosts = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
		allPosts.length === 0 ? setPosts(null) : setPosts(allPosts);
	});
};

export default Home;
