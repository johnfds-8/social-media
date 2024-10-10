import { useState } from "react";
import "./App.css";
import CreatePost from "./components/createpost/CreatePost";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PostList from "./components/postlist/PostList";
import SideBar from "./components/sidebar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/strorelist/post-list-stroe";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setselectedTab={setselectedTab} />

        <div className="content">
          <Header />

          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
