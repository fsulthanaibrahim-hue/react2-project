import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

export default function BlogDetail() {
    const { id } = useParams();
    const { blogs, updateBlog, deleteBlog } = useContext(BlogContext);
    const navigate = useNavigate();

    const [blog, setBlog] = useState({ title: "", body: "" });

    useEffect(() => {
        const found = blogs.find((b) => b.id === parseInt(id));
        if (found) setBlog(found);
    }, [blogs, id]);

    if(!blog.id) {
        return <h2>Loading...</h2>;
    }

    const handleUpdate = () => {
        updateBlog(blog.id, blog);
        navigate("/blogs");
    };
    const handleDelete = () => {
        deleteBlog(blog.id);
        navigate("/blogs");
    };
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>Blog Detail</h1>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              style={{ display: "block", margin: "10px 0", padding: "5px", width: "300px" }}
            />
            <textarea
              value={blog.body}
              onChange={(e) => setBlog({ ...blog, body: e.target.value })}  
              style={{ display: "block", margin: "10px 0", padding: "5px", width: "300px", height: "100px" }}
            />
            <button onClick={handleUpdate} style={{ marginRight: "10px" }}>Update</button>
            <button onClick={handleDelete}>Delete</button>  
        </div>
    );
}









