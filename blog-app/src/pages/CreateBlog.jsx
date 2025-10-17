import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { addBlog } = useContext(BlogContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog({ title, body });
        navigate("/blogs");
    };
    return (
        <div style={{ padding: "20px" }}>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
               <input
                 type="text"
                 placeholder="Title"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 required
                 style={{ display: "block", margin: "10px 0", padding: "5px", width: "300px" }}
               />    
               <textarea
                  placeholder="Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                  style={{ display: "block", margin: "10px 0", padding: "5px", width: "300px", height: "100px" }}
               /> 
                <button type="submit">Add Blog</button> 
            </form>
        </div>
    );
}




