import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';
import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledInputContainer,
	StyledMain
} from './styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import UploadPhoto from '../../components/photo-upload/PhotoUpload';

const NewPost = () => {
	const { currentUser } = useContext(AuthContext);
	const [newPostInfo, setNewPostInfo] = useState({
		titulo: null,
		texto: null,
		image: null
	});
	return (
		<StyledMain>
			<StyledForm onSubmit={e => createPost(e, newPostInfo, currentUser)}>
				<h3>Crear post</h3>
				<StyledInputContainer>
					<label>Title</label>
					<StyledInput
						type='text'
						onChange={e =>
							setNewPostInfo({ ...newPostInfo, titulo: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label>Text</label>
					<StyledInput
						type='text'
						onChange={e =>
							setNewPostInfo({ ...newPostInfo, texto: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledButton>Crear</StyledButton>
			</StyledForm>
			<UploadPhoto setNewPostInfo={setNewPostInfo} newPostInfo={newPostInfo} />
		</StyledMain>
	);
};

const createPost = async (e, newPostInfo, currentUser) => {
	e.preventDefault();

	try {
		await addDoc(blogCollectionReference, {
			...newPostInfo,
			owner: currentUser.email,
			date: new Date().toLocaleString()
		});
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

export default NewPost;
