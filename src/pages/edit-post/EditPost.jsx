import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledInputContainer
} from './styles';
import { useState } from 'react';

const EditPost = () => {
	const [editedPostInfo, setEditedPostInfo] = useState({
		titulo: null,
		texto: null
	});
	return (
		<main>
			<StyledForm>
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

export default EditPost;
