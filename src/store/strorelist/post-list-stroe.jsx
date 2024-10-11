import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
}); 

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFALT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

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
    tags: ["vacation", "Mumbai","dj"],
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
