// server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data
const data = require("./data.json");

// Define a route to get all blog posts
app.get("/posts", (req, res) => {
	res.json(data.posts);
});

// Define a route to add a new blog post
app.post("/posts/add", (req, res) => {
	const newPost = req.body;
	data.posts.push(newPost);
	res.json({ message: "Blog post added successfully!", post: newPost });
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
