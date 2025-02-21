import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  return (
    <>
      <Navbar />
      <div className="blog-container py-5 mt-5">
        <h1 className="blog-heading">{blog.heading}</h1>
        <p className="blog-paragraph">{blog.para1}</p>  
        <p className="blog-paragraph">{blog.para3}</p>    
        <ul className="blog-features">
          {blog?.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="blog-paragraph">{blog?.para2}</p>
        <img src={blog.img} className="blog-image" alt={blog.heading} />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
