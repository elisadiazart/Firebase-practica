import { deleteDoc, doc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const DeletePost = ({ setModal, id }) => {
	return (
		<>
			<h3>¿Seguro que quieres borrar?</h3>
			<button onClick={() => setModal(null)}>Cancelar</button>
			<button onClick={() => deletePost(id)}>Si</button>
		</>
	);
};

const deletePost = async id => {
	try {
		const postToDelete = doc(blogCollectionReference, id);
		await deleteDoc(postToDelete);
	} catch (err) {
		console.log(err);
	}
};

export default DeletePost;
