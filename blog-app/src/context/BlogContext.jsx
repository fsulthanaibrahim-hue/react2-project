import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        try {
            const res = await axios.get("http://localhost:3000/blogs");
            setBlogs(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchBlogs();
    }, []);
    const addBlog = async (blog) => {
        try {
            const res = await axios.post("http://localhost:3000/blogs", blog);
            setBlogs([...blogs, res.data]);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteBlog = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/blogs/${id}`);
            setBlogs(blogs.filter((b) => b.id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    const updateBlog = async (id, updateBlog) => {
        try {
            const res = await axios.put(`http://localhost:3000/blogs/${id}`, updateBlog);
            setBlogs(blogs.map((b) => (b.id === id ? res.data : b)));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, updateBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

