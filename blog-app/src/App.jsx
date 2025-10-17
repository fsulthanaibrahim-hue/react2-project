import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}
export default App;




