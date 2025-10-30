import React, { useState, useEffect } from "react";
import "../Styles/Blog.css";
import blogsData from "../utils/blog.json";


const BlogPage = () => {
     const [blogs, setBlogs] = useState([]);
     const [newBlog, setNewBlog] = useState({
          title: "",
          author: "",
          content: "",
     });

     useEffect(() => {
          setBlogs(blogsData);
     }, []);

     const handleChange = (e) => {
          setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!newBlog.title || !newBlog.author || !newBlog.content) return;

          const blogToAdd = {
               id: blogs.length + 1,
               title: newBlog.title,
               author: newBlog.author,
               date: new Date().toISOString().split("T")[0],
               content: newBlog.content,
          };

          setBlogs([blogToAdd, ...blogs]);
          setNewBlog({ title: "", author: "", content: "" });
     };

     return (
          <div className="blog-page">
               <h1 className="blog-title">Blog</h1>



               <div className="blog-list">
                    {blogs.map((blog) => (
                         <div className="blog-card" key={blog.id}>
                              <h2>{blog.title}</h2>
                              <p className="meta">
                                   By <span>{blog.author}</span> | {blog.date}
                              </p>
                              <p className="content">{blog.content}</p>
                         </div>
                    ))}
               </div>

               {/* <form className="blog-form" onSubmit={handleSubmit}>
                    <input
                         type="text"
                         name="title"
                         placeholder="Blog Title"
                         value={newBlog.title}
                         onChange={handleChange}
                         required
                    />
                    <input
                         type="text"
                         name="author"
                         placeholder="Author Name"
                         value={newBlog.author}
                         onChange={handleChange}
                         required
                    />
                    <textarea
                         name="content"
                         placeholder="Write your blog here..."
                         value={newBlog.content}
                         onChange={handleChange}
                         required
                    ></textarea>
                    <button type="submit">Publish Blog</button>
               </form> */}
          </div>
     );
};

export default BlogPage;
