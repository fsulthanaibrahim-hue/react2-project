import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function BlogList() {
    const { blogs, deleteBlog } = useContext(BlogContext);
   return (
    <div style={{ padding: "20px" }}>
        <h1>All Blogs</h1>
        {blogs.map((blog) => (
            <div key={blog.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
               <h2>{blog.title}</h2>
               <p>{blog.body}</p> 
               <Link to={`/blogs/${blog.id}`}>View</Link>
               <button onClick={() => deleteBlog(blog.id)} style={{ marginLeft: "10px" }}>Delete</button>
            </div>   
         ))}
     </div>
   ); 
}


