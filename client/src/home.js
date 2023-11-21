import React, { useState } from 'react';

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    snippet: '',
    body: '',
  });

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log('Form submitted:', blogData);
  };

  return (
    <div className="create-blog content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="snippet">Blog snippet:</label>
        <input
          type="text"
          id="snippet"
          name="snippet"
          value={blogData.snippet}
          onChange={handleChange}
          required
        />

        <label htmlFor="body">Blog body:</label>
        <textarea
          id="body"
          name="body"
          value={blogData.body}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
