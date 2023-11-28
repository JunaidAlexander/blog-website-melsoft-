import "./home.css";
import React, { useEffect, useState } from "react";

const App = () => {
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({
		title: "",
		snippet: "",
		body: ""
	});

	useEffect(() => {
		const getPosts = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/blogs");
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		getPosts();
	}, []);

	const handleInputChange = e => {
		setNewPost({
			...newPost,
			[e.target.name]: e.target.value
		});
	};

	const handleAddPost = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/blogs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(newPost)
			});
			const data = await response.json();
			console.log(data);
			await getPosts();
		} catch (error) {
			console.error("Error adding post:", error);
		}
	};

	const getPosts = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/blogs");
			const data = await response.json();
			setPosts(data);
		} catch (error) {
			console.error("Error fetching posts:", error);
		}
	};

	const handleEditPost = async post => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/blogs/${post.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newPost)
				}
			);
			const data = await response.json();
			console.log(data);
			await getPosts();
		} catch (error) {
			console.error("Error editing post:", error);
		}
	};

	const handleDeletePost = async post => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/blogs/${post.id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			const data = await response.json();
			console.log(data);
			await getPosts();
		} catch (error) {
			console.error("Error deleting post:", error);
		}
	};
	return (
		<div className="home">
			<h1>Blog Posts</h1>
			<ul>
				{posts.map((post =>
					<li key={post.id}>
						<h2>
							{post.title}
						</h2>
						<p>
							{post.snippet}
						</p>
						<p>
							{post.body}
						</p>
						<button type="button" onClick={() => handleEditPost(post)}>
							Edit
						</button>
						<button type="button" onClick={() => handleDeletePost(post)}>
							Delete
						</button>
					</li>
				))}
			</ul>

			<h2>Add a New Post</h2>
			<form>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={newPost.title}
					onChange={handleInputChange}
				/>

				<label htmlFor="snippet">Snippet:</label>
				<input
					type="text"
					id="snippet"
					name="snippet"
					value={newPost.snippet}
					onChange={handleInputChange}
				/>

				<label htmlFor="body">Body:</label>
				<textarea
					id="body"
					name="body"
					value={newPost.body}
					onChange={handleInputChange}
				/>

				<button type="button" onClick={handleAddPost}>
					Add Post
				</button>
			</form>
		</div>
	);
};

export default App;
