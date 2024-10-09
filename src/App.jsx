import { useState } from "react";
import "./App.css";
import CreatePost from "./components/createpost/CreatePost";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PostList from "./components/postlist/PostList";
import SideBar from "./components/sidebar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <div className="app-container">
      <SideBar selectedTab={selectedTab} />

      <div className="content">
        <Header />

        {selectedTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
