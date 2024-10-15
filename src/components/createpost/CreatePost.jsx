import React, { useContext, useRef } from "react";
import { PostList } from "../../store/strorelist/post-list-stroe";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);

    addPost(userId,postTitle,postBody,reactions,tags)
  };

  return (
    <form className="create-post" onSubmit={handleSubit}>
      {/* User ID  */}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
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
          ref={postTitleElement}
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
          ref={postBodyElement}
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
          ref={reactionsElement}
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
          ref={tagsElement}
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
