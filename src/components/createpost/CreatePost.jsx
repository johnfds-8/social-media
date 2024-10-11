import React from "react";

function CreatePost() {
  return (
    <form className="create-post">
      {/* User ID  */}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>

      {/* Post Title */}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
        />
      </div>

      {/* Post Content  */}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Content
        </label>

        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
        />
      </div>

      {/* Reactions */}

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>

        <input
          type="text"
          className="form-control"
          id="react"
          placeholder="How many people to this post"
        />
      </div>

      {/* Tags */}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your hashtags here
        </label>

        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using specs"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
      
    </form>
  );
}

export default CreatePost;
