import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      tags,
      postType,
      abstract: postType === 'article' ? abstract : undefined,
    };
    console.log('Post Data:', postData);
  };

  return (
    <div className="App">
      <h1>Create a New Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="post-type">
          <label>
            <input
              type="radio"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            Question
          </label>

          <label>
            <input
              type="radio"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            Article
          </label>
        </div>

        {postType === 'question' ? (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="What do you want to ask?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Explain your question in detail"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter the title of your article"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Abstract</label>
              <textarea
                placeholder="Provide a brief overview of your article"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Article Content</label>
              <textarea
                placeholder="Write the content of your article here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            placeholder="Add relevant tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default App;
