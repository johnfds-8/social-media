import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      post => post.id !== action.payload.postId
    );
  }
  return newPostList;
};  

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFALT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFALT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friend,",
    reaction: 2,
    userId: "user-g",
    tags: ["vacation", "Mumbai", "dj"],
  },
  {
    id: "2",
    title: "Pass",
    body: "Pass ho gaya",
    reaction: 15,
    userId: "user-12",
    tags: ["finally", "graju"],
  },
];

export default PostListProvider;
