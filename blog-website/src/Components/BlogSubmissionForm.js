import React, { useState, useEffect } from "react";
import "../components/BlogSubmissionForm.css"; // Add your CSS file import

const BlogSubmissionForm = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedPostIndex, setEditedPostIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleCreatePost = () => {
    try {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "" });
      setShowForm(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditPost = (index) => {
    setEditMode(true);
    setEditedPostIndex(index);
    setNewPost({ ...posts[index] });
  };

  const handleSaveEditedPost = () => {
    const updatedPosts = [...posts];
    updatedPosts[editedPostIndex] = newPost;
    setPosts(updatedPosts);
    setEditMode(false);
    setEditedPostIndex(null);
    setNewPost({ title: "", content: "" });
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);

    if (editMode && index === editedPostIndex) {
      setEditMode(false);
      setEditedPostIndex(null);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>Create/Submit a Blog Post</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newPost.content}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveEditedPost}>Save Edited Post</button>
        </div>
      ) : (
        showForm && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newPost.title}
              onChange={handleInputChange}
            />
            <textarea
              name="content"
              placeholder="Content"
              value={newPost.content}
              onChange={handleInputChange}
            />
            <button onClick={handleCreatePost}>Submit Blog Post</button>
          </div>
        )
      )}

      <div className="created-posts">
        <h3>Submitted Blog Posts</h3>
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <button onClick={() => handleEditPost(index)}>Edit</button>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSubmissionForm;
