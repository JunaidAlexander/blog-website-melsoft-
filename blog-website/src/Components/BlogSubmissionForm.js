import React, { useState } from "react";
import ".BlogSubmissionForm.css";

const BlogSubmissionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle form submission (e.g., API request, state update, etc.)
    // For this example, we will log the form data to the console
    console.log("Form Submitted:", formData);

    // You can add additional logic here, such as making an API request
    // Example API request using fetch:
    // fetch('https://api.example.com/blog', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('API Response:', data))
    //   .catch(error => console.error('API Error:', error));

    // Reset the form after submission
    setFormData({
      title: "",
      author: "",
      content: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Blog Submission Form</h2>

      <label htmlFor="title">Blog Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="author">Your Name:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <label htmlFor="content">Blog Content:</label>
      <textarea
        id="content"
        name="content"
        rows="6"
        value={formData.content}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit Blog</button>
    </form>
  );
};

export default BlogSubmissionForm;
