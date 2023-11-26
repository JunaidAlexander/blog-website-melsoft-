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
		// Fetch the list of posts from the server
		fetch("http://localhost:3000/apis/blogs")
			.then(response => response.json())
			.then(data => setPosts(data))
			.catch(error => console.error("Error fetching posts:", error));
	}, []);

	const handleInputChange = e => {
		setNewPost({
			...newPost,
			[e.target.name]: e.target.value
		});
	};

	const handleAddPost = () => {
		// Send a POST request to add a new blog post
		fetch("http://localhost:3000/apis/blogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newPost)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				// Refresh the list of posts after adding a new one
				fetch()
					.then(response => response.json())
					.then(data => setPosts(data))
					.catch(error => console.error("Error fetching posts:", error));
			})
			.catch(error => console.error("Error adding post:", error));
	};

	return (
		<div className="home">
			<h1>Blog Posts</h1>
			<ul>
				{posts.map(post =>
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
					</li>
				)}
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
