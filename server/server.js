const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const port = 3000;
const blogsFilePath = path.join(__dirname, "blogs.json");

app.use(express.json());
app.use(
	cors({
		origin: "*"
	})
);

// Read existing data from the JSON file
const readData = async () => {
	try {
		const data = await fs.readFile(blogsFilePath, "utf-8");
		return JSON.parse(data);
	} catch (error) {
		if (error.code === "ENOENT") {
			// If the file doesn't exist, create an empty array
			await fs.writeFile(blogsFilePath, "{}");
			return [];
		} else {
			throw error;
		}
	}
};

app.get("/api/blogs", async (req, res) => {
	try {
		const jsonFile = await readData();
		res.json(jsonFile.blogs);
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
});

app.post("/api/blogs", async (req, res) => {
	try {
		const jsonFile = await readData();

		// Add new blog to the array
		const newBlog = req.body;
		jsonFile.blogs.push(newBlog);

		// Write the updated data back to the JSON file
		await fs.writeFile(blogsFilePath, JSON.stringify(jsonFile, null, 2));

		res.status(201).json({ success: true, message: "Blog saved successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
});

app.put("/api/blogs/:id", async (req, res) => {
	try {
		const jsonFile = await readData();
		const blogId = req.params.id;

		// Find the index of the blog with the given ID
		const blogIndex = jsonFile.blogs.findIndex(blog => blog.id === blogId);

		if (blogIndex === -1) {
			return res
				.status(404)
				.json({ success: false, message: "Blog not found" });
		}

		// Update the blog with the new data
		jsonFile.blogs[blogIndex] = { ...jsonFile.blogs[blogIndex], ...req.body };

		// Write the updated data back to the JSON file
		await fs.writeFile(blogsFilePath, JSON.stringify(jsonFile, null, 2));

		res.json({ success: true, message: "Blog updated successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
});

app.delete("/api/blogs/:id", async (req, res) => {
	try {
		const jsonFile = await readData();
		const blogId = req.params.id;
		console.log(blogId);
		// Filter out the blog with the given ID
		jsonFile.blogs = jsonFile.blogs.filter(blog => blog.id !== blogId);

		// Write the updated data back to the JSON file
		await fs.writeFile(blogsFilePath, JSON.stringify(jsonFile, null, 2));

		res.json({ success: true, message: "Blog deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
