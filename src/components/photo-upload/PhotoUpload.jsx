import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { StyledForm, StyledImg, StyledButton, StyledTitle } from './styles';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import { useState } from 'react';

const UploadPhoto = ({ setNewPostInfo, newPostInfo }) => {
	const noPhotoURL = '../../../public/no-photo-available.png';
	const [photoPreview, setPhotoPreview] = useState(null);
	return (
		<>
			<StyledForm>
				<StyledTitle>Subir imagen</StyledTitle>
				<input
					type='file'
					onChange={e =>
						handleFile(
							e.target.files[0],
							setPhotoPreview,
							setNewPostInfo,
							newPostInfo
						)
					}
				/>
				{photoPreview ? (
					<div>
						<StyledImg src={photoPreview} alt='Photo Preview' />
					</div>
				) : (
					<div>
						<StyledImg src={noPhotoURL} alt='Photo Preview' />
					</div>
				)}
			</StyledForm>
			<StyledButton onClick={() => deteleFile(photoPreview, setPhotoPreview)}>
				Borrar foto
			</StyledButton>
		</>
	);
};

const handleFile = async (
	file,
	setPhotoPreview,
	setNewPostInfo,
	newPostInfo
) => {
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(imageURL);
		setPhotoPreview(imageURL);
		setNewPostInfo({ ...newPostInfo, image: imageURL });
	} catch (err) {
		console.error('Error al subir el archivo', err);
	}
};

const deteleFile = async (
	imageURL,
	setPhotoPreview,
	setNewPostInfo,
	newPostInfo
) => {
	const storageRef = ref(storage, imageURL);
	try {
		await deleteObject(storageRef);
		console.log('Foto eliminada exitosamente');
		setPhotoPreview(null);
		setNewPostInfo({ ...newPostInfo, image: null });
	} catch (err) {
		console.error('Error al eliminar la foto', err);
	}
};

export default UploadPhoto;
