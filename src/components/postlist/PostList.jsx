import React, { useContext } from "react";
import Post from "../post/Post";

import { PostList as PostListData } from "../../store/strorelist/post-list-stroe";
function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
