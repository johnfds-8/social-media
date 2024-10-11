import React from "react";

function Post({ post }) {
  return (
    <div>
      <div className="card post-card" style={{ width: " 18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}

            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reaction}
              
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary post-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
