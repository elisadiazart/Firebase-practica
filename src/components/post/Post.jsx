const Post = ({ post }) => {
	return (
		<>
			<h3>{post.titulo}</h3>
			<p>{post.texto}</p>
		</>
	);
};

export default Post;
