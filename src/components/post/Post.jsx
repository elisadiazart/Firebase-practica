const Post = ({ post }) => {
	const noPhotoURL = '../../../public/no-photo-available.png';
	return (
		<>
			<h3>{post.titulo}</h3>
			<p>{post.texto}</p>
			{post.image ? (
				<img src={post.image} alt='image' />
			) : (
				<img src={noPhotoURL} alt='image' />
			)}
		</>
	);
};

export default Post;
