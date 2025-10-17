import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
            <Link to="/blogs" style={{ marginRight: "10px" }}>Blogs</Link>
            <Link to="/createblog">Create Blog</Link>
        </nav>
    );
}



