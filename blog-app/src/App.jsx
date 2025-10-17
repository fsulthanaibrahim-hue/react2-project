// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { BlogProvider } from "./context/BlogContext";
// // import Navbar from "./components/Navbar";
// // import BlogList from "./pages/BlogList";
// // import CreateBlog from "./pages/CreateBlog";
// // import BlogDetail from "./pages/BlogDetail";

// // function App() {
// //   return (
// //     <BlogProvider>
// //       <Router>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<BlogList />} />
// //           <Route path="/createblog" element={<CreateBlog />} />
// //           <Route path="/blogs/:id" element={<BlogDetail />} />
// //         </Routes>
// //       </Router>
// //     </BlogProvider>
// //   );
// // }
// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import BlogList from "./pages/BlogList";
// import CreateBlog from "./pages/CreateBlog";
// import BlogDetail from "./pages/BlogDetail";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<BlogList />} />
//                 <Route path="/blogs" element={<BlogList />} /> 
//         <Route path="/createblog" element={<CreateBlog />} />
//         <Route path="/blogs/:id" element={<BlogDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect root to /blogs */}
        <Route path="/" element={<Navigate to="/blogs" />} />
        
        {/* Blog routes */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
