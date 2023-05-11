import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { StyledPostCard, StyledPosts } from './styles';
import { AuthContext } from '../../contexts/auth.context';
import Modal from '../../components/modal/Modal';
import DeletePost from '../../components/delete-post/DeletePost';
import Post from '../../components/post/Post';
import EditPost from '../edit-post/EditPost';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [modal, setModal] = useState(null);
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);

	return (
		<main>
			<StyledPosts>
				{posts.map(post => {
					return (
						<StyledPostCard key={post.id}>
							<h3>{post.titulo}</h3>
							<p>{post.texto}</p>
							<button
								onClick={() => {
									getPostById(post.id, setModal);
								}}
							>
								Ver mas
							</button>
							
							{currentUser && currentUser.email === post.owner ? (
								<>
									<button onClick={() => setModal(<EditPost id={post.id} />)}>Editar</button>
									<button
										onClick={() =>
											setModal(<DeletePost setModal={setModal} id={post.id} />)
										}
									>
										Borrar
									</button>
								</>
							) : null}
						</StyledPostCard>
					);
				})}
			</StyledPosts>
			<Modal setModal={setModal}>{modal}</Modal>
		</main>
	);
};

const getPostById = async (id, setModal) => {
	const postReference = doc(blogCollectionReference, id);
	try {
		const postToRead = await getDoc(postReference);
		const currentPost = postToRead.data();
		setModal(<Post post={currentPost} />);
	} catch (err) {
		console.log(err);
	}
};

export default Home;
