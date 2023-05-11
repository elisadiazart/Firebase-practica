import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledInputContainer
} from './styles';
import { useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { doc, updateDoc } from 'firebase/firestore';

const EditPost = ({ id }) => {
	const [editedPostInfo, setEditedPostInfo] = useState({
		titulo: null,
		texto: null
	});
	return (
		<main>
			<StyledForm onSubmit={e => updatePost(e, id, editedPostInfo)}>
				<h3>Editar post</h3>
				<StyledInputContainer>
					<label>Title</label>
					<StyledInput
						type='text'
						onChange={e =>
							setEditedPostInfo({ ...editedPostInfo, titulo: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label>Text</label>
					<StyledInput
						type='text'
						onChange={e =>
							setEditedPostInfo({ ...editedPostInfo, texto: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledButton>Editar</StyledButton>
			</StyledForm>
		</main>
	);
};

const updatePost = async (e, id, newData) => {
	e.preventDefault();

	try {
		const postToUpdate = doc(blogCollectionReference, id);
		await updateDoc(postToUpdate, newData);
		console.log('Documento actualizado con exito');
	} catch (err) {
		console.error('Error al actualizar el documento', err);
	}
};

export default EditPost;
